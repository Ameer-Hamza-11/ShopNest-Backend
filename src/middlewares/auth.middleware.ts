import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { ApiError } from "../utils/apiError";
import { JwtPayload, verifyToken } from "../utils/jwt";




declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload
        }
    }
}
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.headers.authorization
        if (!header || !header.startsWith("Bearer ")) {
            return next(new ApiError(401, "Authorization token missing or invalid"));
        }

        const token = header.split(" ")[1]

        if(!token){
            return next(new ApiError(401, "Token not found"));
        }

        const decoded = verifyToken(token)
        req.user = decoded

        next()

    } catch (error) {
        if (error instanceof Error && error.name === "TokenExpiredError") {
            return next(new ApiError(401, "Token has expired"));
        }
        next(new ApiError(401, "Invalid token"));
    }
}