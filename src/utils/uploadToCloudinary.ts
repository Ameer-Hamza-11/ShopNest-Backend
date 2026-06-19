import cloudinary from "../config/cloudinary";
import streamifier from "streamifier";



export const uploadToCloudinary = (file: Express.Multer.File) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "products" },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        streamifier.createReadStream(file.buffer).pipe(stream);
    });
};