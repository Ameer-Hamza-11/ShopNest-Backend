import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseUrl: process.env.DATABASE_URL as string,
  jwtSecret: process.env.JWT_SECRET_KEY as string,
  userEmail: process.env.EMAIL_USER as string,
  userEmailPassword: process.env.EMAIL_PASSWORD as string,
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY as string,
  cloudinarySecretKey: process.env.CLOUDINARY_SECRET_KEY as string,
};