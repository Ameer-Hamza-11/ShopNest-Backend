import { NextFunction, Request, Response } from "express"
import { ApiError } from "../utils/apiError"
import {  UserRole } from "../modules/auth/user.types"




export const authorizedRoles = (...allowedRoles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.user) {
                return next(new ApiError(401, "Authentication required"))
            }

            if (!allowedRoles.includes(req.user.role)) {
                return next(new ApiError(403, `Access denied. Role: ${req.user.role} is not authorized.`));
            }

            next();

        } catch (error) {
            next(error);
        }
    }
}