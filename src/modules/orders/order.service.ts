import { eq, inArray } from "drizzle-orm";
import { db } from "../../config/db";
import { orderItems, orders, products, users } from "../../drizzle/schema";
import { CreateOrderInput } from "./order.schema";
import { ApiError } from "../../utils/apiError";
import { sendMail } from "../../utils/sendMail";
import { emailTemplates } from "../../templates/emailTemplates";

type OrderStatus = "Pending" | "Shipped" | "Delivered";

export const orderService = {
    createOrder: async (orderData: CreateOrderInput, userId: string) => {
        try {
            const { items, ...details } = orderData;

            // 1. Validate items
            if (!items || items.length === 0) {
                throw new ApiError(400, "Order must contain at least one item");
            }

            // 2. User check
            const [user] = await db.select().from(users).where(eq(users.id, userId));
            if (!user) {
                throw new ApiError(404, "User not found");
            }

            // 3. Fetch products
            const productIds = items.map((item) => item.productId);
            const productsData = await db.select().from(products).where(inArray(products.id, productIds));

            if (productsData.length !== items.length) {
                throw new ApiError(404, "One or more products not found");
            }

            // 4. Create product map for O(1) lookup
            const productMap = new Map(productsData.map(p => [p.id, p]));

            // 5. Calculate total and prepare data using map
            let totalAmount = 0;

            const orderItemsData = items.map((item) => {
                const product = productMap.get(item.productId);
                if (!product) {
                    throw new ApiError(404, `Product ${item.productId} not found`);
                }

                const itemTotal = Number(product.price) * item.qty;
                totalAmount += itemTotal;

                return {
                    productId: product.id,
                    qty: item.qty,
                    price: product.price,
                };
            });

            // 6. Prepare email items array (with product names)
            const emailItems = items.map((item) => {
                const product = productMap.get(item.productId)!;
                return {
                    name: product.name,
                    quantity: item.qty,
                    price: Number(product.price),
                };
            });

            const method = details.paymentMethod ?? "COD";

            // 7. Execute transaction
            const transactionResult = await db.transaction(async (tx) => {
                const [newOrder] = await tx.insert(orders).values({
                    city: details.city,
                    country: details.country,
                    fullName: details.fullName,
                    postalCode: details.postalCode,
                    totalAmount: totalAmount.toString(),
                    street: details.street,
                    status: "Pending" as const,
                    userId: userId,
                    paymentMethod: method,
                    paymentStatus: method === "COD" ? "Pending" : "Paid",
                }).returning();

                const newOrderItems = await tx.insert(orderItems).values(
                    orderItemsData.map((item) => ({
                        orderId: newOrder.id,
                        productId: item.productId,
                        qty: item.qty,
                        price: item.price,
                    }))
                ).returning();

                return {
                    order: newOrder,
                    items: newOrderItems,
                };
            });

            // 8. Send email (outside transaction)
            try {
                const { subject, html } = emailTemplates.orderCreated(
                    user.name,
                    transactionResult.order.id,
                    emailItems, // Pass the array of items with names
                    totalAmount
                );
                await sendMail(user.email, subject, html);
            } catch (emailError) {
                console.error("Failed to send order confirmation email:", emailError);
                // Don't throw - order is already created
            }

            // 9. Return response
            return {
                order: transactionResult.order,
                items: transactionResult.items,
            };

        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    },

    getOrders: async () => {
        return await db.select().from(orders);
    },

    updateOrderStatus: async (orderId: string, status: OrderStatus) => {
        const [updatedOrder] = await db
            .update(orders)
            .set({
                status,
                updatedAt: new Date(),
            })
            .where(eq(orders.id, orderId))
            .returning();

        if (!updatedOrder) {
            throw new ApiError(404, "Order not found");
        }

        const [user] = await db
            .select()
            .from(users)
            .where(eq(users.id, updatedOrder.userId));

        if (user) {
            try {
                const { subject, html } = emailTemplates.orderStatusUpdated(
                    user.name,
                    orderId,
                    status
                );

                await sendMail(user.email, subject, html);
            } catch (error) {
                console.error("Email sending failed:", error);
            }
        }

        return updatedOrder;
    },

    getMyOrders: async (userId: string) => {
        const userOrders = await db
            .select()
            .from(orders)
            .where(eq(orders.userId, userId));

        if (!userOrders.length) {
            return [];
        }

        const orderIds = userOrders.map((order) => order.id);

        const allItems = await db
            .select()
            .from(orderItems)
            .where(inArray(orderItems.orderId, orderIds));

        return userOrders.map((order) => ({
            ...order,
            items: allItems.filter((item) => item.orderId === order.id),
        }));
    },
};