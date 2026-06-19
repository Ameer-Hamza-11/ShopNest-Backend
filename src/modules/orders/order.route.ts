import express from "express"
import { authMiddleware } from "../../middlewares/auth.middleware"
import { authorizedRoles } from "../../middlewares/authorizedRoles"
import { UserRole } from "../auth/user.types"
import { orderController } from "./order.controller"



export const orderRoute = express.Router()


orderRoute.route("/")
    .post(authMiddleware, orderController.createOrder)
    .get(authMiddleware, authorizedRoles(UserRole.ADMIN), orderController.getOrders)

orderRoute.route("/:id/status").patch(authMiddleware, authorizedRoles(UserRole.ADMIN), orderController.updateOrderStatus)

orderRoute.route("/my-orders").get(authMiddleware, orderController.getMyOrders)