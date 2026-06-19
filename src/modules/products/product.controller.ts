import { NextFunction, Request, Response } from "express";
import { productService } from "./product.service";
import { ApiResponse } from "../../utils/apiResponse";
import { productSchema, updateProductSchema } from "../../../../shared/schemas/product.schema";
import { ProductParams } from "./product.types";
import cloudinary from "../../config/cloudinary";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

export const productController = {
    getProducts: async (req: Request, res: Response, next: NextFunction) => {
        try {

            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 8;
            const search = String(req.query.search || "");
            const response = await productService.getProducts(page,limit, search)

            return res.status(200).json(new ApiResponse(true, "Products retrieved successfully", response));

        } catch (error) {
            next(error)

        }
    },
    createProduct: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const parsedBody = {
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                price: Number(req.body.price),
                stock: Number(req.body.stock),
                ratings: req.body.ratings ? Number(req.body.ratings) : undefined,
            };

            const result = productSchema.omit({ imageUrl: true }).safeParse(parsedBody);

            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    message: "Validation error",
                    errors: result.error.issues[0].message,
                });
            }

            let imageUrl = "";
            if (req.file) {
                const uploaded: any = await uploadToCloudinary(req.file);
                imageUrl = uploaded.secure_url;
            }

            if (!imageUrl) {
                return res.status(400).json({
                    success: false,
                    message: "Image is required",
                });
            }

            const response = await productService.createProduct({
                ...result.data,
                imageUrl,
                userId: req.user!.userId
            });

            return res.status(201).json(
                new ApiResponse(true, "Product created successfully", response)
            );
        } catch (error) {
            next(error);
        }
    },

    getProductById: async (
        req: Request<ProductParams>,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const response = await productService.getProductById(req.params.id);

            return res.status(200).json(
                new ApiResponse(true, "Product retrieved successfully", response)
            );
        } catch (error) {
            next(error);
        }
    },
    updateProductById: async (req: Request<ProductParams>, res: Response, next: NextFunction) => {
        try {
            const parsedBody = {
                ...req.body,
                price: Number(req.body.price),
                stock: Number(req.body.stock),
                ratings: Number(req.body.ratings ?? 0),
            };

            const result = updateProductSchema.safeParse(parsedBody);

            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    message: "Validation error",
                    errors: result.error.issues[0].message,
                });
            }

            let imageUrl = "";

            if (req.file) {
                const uploaded: any = await uploadToCloudinary(req.file);
                imageUrl = uploaded.secure_url;
            }

            const response = await productService.updateProductById(req.params.id, {
                ...result.data,
                imageUrl,
                userId: req.user!.userId
            });

            return res.status(201).json(
                new ApiResponse(true, "Product Updated successfully", response)
            );
        } catch (error) {
            next(error);
        }

    },


    deleteProductById: async (req: Request<ProductParams>, res: Response, next: NextFunction) => {
        try {
            await productService.deleteProductById(req.params.id);

            return res.status(200).json(new ApiResponse(true, "Product deleted successfully", null));


        } catch (error) {
            next(error)

        }
    }

};