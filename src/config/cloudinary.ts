import { v2 as cloudinary } from "cloudinary"
import { env } from "./config"


cloudinary.config({
    cloud_name: env.cloudinaryCloudName,
    api_key: env.cloudinaryApiKey,
    api_secret: env.cloudinarySecretKey
})

export default cloudinary