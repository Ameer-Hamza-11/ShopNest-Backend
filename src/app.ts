import express from 'express';
import cors from "cors";
import { authRoute } from './modules/auth/auth.route';
import { errorMiddleware } from './middlewares/error.middleware';
import { productRoute } from './modules/products/product.route';
import { orderRoute } from './modules/orders/order.route';
import { analyticRoute } from './modules/analytics/analytics.route';



const app = express();

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
}))
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.use("/api/analytics", analyticRoute)

app.use(errorMiddleware);



export default app;