import { count, eq, ilike } from "drizzle-orm";
import { db } from "../../config/db";
import { products } from "../../drizzle/schema";
import { ProductInputWithImage, UpdateProductInputWithImage } from "./product.types";
import { ApiError } from "../../utils/apiError";

export const productService = {
    getProducts: async (page: number, limit: number, search: string = "") => {
        try {

            const offset = (page - 1) * limit
            const allProducts = await db.select().from(products).where(
                search
                    ? ilike(products.name, `%${search}%`)
                    : undefined
            ).limit(limit).offset(offset)
        
            const totalProductsResult = await db.select({ count: count() }).from(products).where(
                search
                    ? ilike(products.name, `%${search}%`)
                    : undefined
            )

            const totalProducts = totalProductsResult[0].count;


            const totalPages = Math.ceil(totalProducts / limit);

            return {
                products: allProducts,
                currentPage: page,
                totalPages,
                totalProducts,
                hasMore: page < totalPages,
            };

        } catch (error) {
            console.log("Error fetching products:", error);

            throw error

        }
    },
    createProduct: async (productData: ProductInputWithImage) => {
        try {
            const [product] = await db.insert(products).values({
                userId: productData.userId,
                name: productData.name,
                category: productData.category,
                description: productData.description,
                stock: productData.stock,
                price: String(productData.price),
                ratings: String(productData.ratings ?? "0"),
                imageUrl: productData.imageUrl,
            }).returning();

            return product;
        } catch (error) {
            console.log("Error creating product:", error);
            throw error;
        }
    },

    getProductById: async (id: string) => {
        try {
            const [product] = await db
                .select()
                .from(products)
                .where(eq(products.id, id));

            return product;
        } catch (error) {
            console.log(`Error fetching product with id ${id}:`, error);
            throw error;
        }
    },
    updateProductById: async (id: string, productData: UpdateProductInputWithImage) => {
        try {

            const [existingProduct] = await db.select().from(products).where(eq(products.id, id));
            if (!existingProduct) {
                throw new ApiError(404, "Product not found");

            }
            const [product] = await db
                .update(products)
                .set({
                    name: productData.name ?? existingProduct.name,
                    category: productData.category ?? existingProduct.category,
                    description: productData.description ?? existingProduct.description,
                    stock: productData.stock ?? existingProduct.stock,
                    price: productData.price?.toString() ?? existingProduct.price,
                    imageUrl: productData.imageUrl ?? existingProduct.imageUrl,
                })
                .where(eq(products.id, id))
                .returning();

            return product;
        } catch (error) {
            console.log("Error updating product:", error);
            throw error;
        }

    },

    deleteProductById: async (id: string) => {
        try {
            const [existingProduct] = await db.select().from(products).where(eq(products.id, id));
            if (!existingProduct) {
                throw new ApiError(404, "Product not found");
            }

            await db.delete(products).where(eq(products.id, id))

        } catch (error) {
            console.log("Error deleting product:", error);
            throw error;
        }
    }
};


