import { Multer } from "multer";
import { ProductInput, UpdateProductInput } from "../../../../Frontend/client/src/schemas/product.schema";

export type ProductParams = {
  id: string;
};

declare global {
  namespace Express {
    interface Request {
      file?: Multer.File;
    }
  }
}

export type ProductInputWithImage = ProductInput & {
    imageUrl: string;
    userId: string;
  };


export type UpdateProductInputWithImage = UpdateProductInput & {
    imageUrl: string;
    userId?: string;
  };