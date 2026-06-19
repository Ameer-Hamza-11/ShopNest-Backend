import express from "express"
import { authMiddleware } from "../../middlewares/auth.middleware"
import { authorizedRoles } from "../../middlewares/authorizedRoles"
import { UserRole } from "../auth/user.types"
import { productController } from "./product.controller"
import { upload } from "../../middlewares/multer.middleware"

export const productRoute = express.Router()


productRoute.route("/")
    .get(productController.getProducts)
    .post(authMiddleware, authorizedRoles(UserRole.ADMIN), upload.single("imageUrl"), productController.createProduct)

productRoute.route("/:id")
    .get(productController.getProductById)
    .put(authMiddleware,authorizedRoles(UserRole.ADMIN), upload.single("imageUrl"), productController.updateProductById)
    .delete(authMiddleware, authorizedRoles(UserRole.ADMIN), productController.deleteProductById)