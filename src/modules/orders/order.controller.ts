import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";
import { ApiResponse } from "../../utils/apiResponse";
import { createOrderSchema } from "./order.schema";


export type OrderParams = {
    id: string;
}
export const orderController = {
    createOrder: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const result = await createOrderSchema.safeParse(req.body)

            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    message: "Validation error",
                    errors: result.error.issues[0].message,
                })
            }

            const response = await orderService.createOrder(result.data, req.user?.userId!)

            return res.status(201).json(new ApiResponse(true, "Order created successfully", response))
        } catch (error) {
            console.log("create order error: ", error);
            next(error);

        }
    },
    getOrders: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const orders = await orderService.getOrders();
            return res.status(200).json(new ApiResponse(true, "Orders fetched successfully", orders));
        }
        catch (error) {
            console.log("get orders error: ", error);
            next(error);
        }
    },
    updateOrderStatus: async (req: Request<OrderParams>, res: Response, next: NextFunction) => {
        try {
            const orderId = req.params.id;
            const { status } = req.body;

            const updatedOrder = await orderService.updateOrderStatus(orderId, status);
            return res.status(200).json(new ApiResponse(true, "Order status updated successfully", updatedOrder));
        }
        catch (error) {
            console.log("update order status error: ", error);
            next(error);
        }
    },
    getMyOrders: async (req: Request, res: Response, next: NextFunction) => { 
        try {
            const userId = req.user?.userId!;
            const orders = await orderService.getMyOrders(userId);
            return res.status(200).json(new ApiResponse(true, "My orders fetched successfully", orders));
        }
        catch (error) {
            console.log("get my orders error: ", error);
            next(error);
        }
    },

}