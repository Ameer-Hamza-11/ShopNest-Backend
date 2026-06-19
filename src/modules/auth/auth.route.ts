import express from "express"
import { authController } from "./auth.controller"
import { authMiddleware } from "../../middlewares/auth.middleware"
import { authorizedRoles } from "../../middlewares/authorizedRoles"
import { UserRole } from "./user.types"

export const authRoute = express.Router()


authRoute.route("/register").post(authController.register)
authRoute.route("/login").post(authController.login)
authRoute.route("/users").get(authMiddleware, authorizedRoles(UserRole.ADMIN), authController.getUsers)
authRoute.route("/verify-email").post(authController.verifyEmail)

