import { NextFunction, Request, Response } from "express";
import { analyticsService } from "./analytics.service";
import { ApiResponse } from "../../utils/apiResponse";



export const analyticsController = {
    getAdminStats: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await analyticsService.getAdminStats()

            return res.status(200).json(new ApiResponse(true, "Admin stats fetched successfully", response))

        } catch (error) {
            next(error)
        }
    }
}