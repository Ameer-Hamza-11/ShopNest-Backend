import { count, eq } from "drizzle-orm"
import { db } from "../../config/db"
import { orders, products, users } from "../../drizzle/schema"
import { UserRole } from "../auth/user.types"



export const analyticsService = {
    getAdminStats: async () => {
        try {
            const [totalUsers] = await db.select({ count: count() }).from(users).where(eq(users.role, UserRole.USER))
            const [totalOrders] = await db.select({ count: count() }).from(orders)
            const [totalProducts] = await db.select({ count: count() }).from(products)

            const allOrders = await db.select().from(orders)

            const totalRevenueData = allOrders.reduce((acc, order) => acc + Number(order.totalAmount), 0)

            return {
                totalUsers,
                totalOrders,
                totalProducts,
                totalRevenue: totalRevenueData
            }

        } catch (error) {
            throw error

        }

    }


}