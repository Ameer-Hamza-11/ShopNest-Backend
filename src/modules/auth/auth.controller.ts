import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";
import { loginSchema, registerSchema, verifyEmailSchema } from "../../../../shared/schemas/auth.schema";
import { ApiResponse } from "../../utils/apiResponse";

export const authController = {
    register: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const result = await registerSchema.safeParse(req.body)
            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    message: "Validation error",
                    errors: result.error.issues[0].message
                })
            }

            const response = await authService.register(result.data)

            return res.status(201).json(new ApiResponse(true, "Registration successful", response));



        } catch (error) {
            next(error)
        }
    },

    login: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const result = await loginSchema.safeParse(req.body)
            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    message: "Validation error",
                    errors: result.error.issues[0].message
                })
            }

            const response = await authService.login(result.data)

            return res.status(200).json(new ApiResponse(true, "Login successful", response));




        } catch (error) {
            next(error)
        }
    },

    getUsers: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await authService.getUsers()

            return res.status(200).json(new ApiResponse(true, "User Retrieved successful", response));

        } catch (error) {
            next(error)
        }
    },
    verifyEmail: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = verifyEmailSchema.safeParse(req.body)
            if (!result.success) {
               return res.status(400).json(result.error.issues[0].message)
            }
            
            const { email, otp } = result.data
            const response = await authService.verifyEmail(email, otp)

            return res.status(200).json(new ApiResponse(true, "Email verified successfully", response));


        } catch (error) {
            next(error)
        }
    }
}