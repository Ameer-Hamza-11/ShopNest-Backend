import express from "express"
import { authorizedRoles } from "../../middlewares/authorizedRoles"
import { UserRole } from "../auth/user.types"
import { authMiddleware } from "../../middlewares/auth.middleware"
import { analyticsController } from "./analytics.controller"



export const analyticRoute = express.Router()



analyticRoute.route("/").get(authMiddleware, authorizedRoles(UserRole.ADMIN), analyticsController.getAdminStats)
