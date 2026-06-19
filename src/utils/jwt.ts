import jwt from "jsonwebtoken";
import { env } from "../config/config";
import { UserRole } from "../modules/auth/user.types";

export type JwtPayload = {
    userId: string;
    email: string;
    role: UserRole;
}

export const generateToken = (payload: JwtPayload) => {
    return jwt.sign(payload, env.jwtSecret, { expiresIn: "30d" })
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, env.jwtSecret) as JwtPayload
}