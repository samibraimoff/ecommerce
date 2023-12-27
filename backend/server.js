import express from "express";
import productRoutes from "./routes/product-routes.js";
import userRoutes from "./routes/user-routes.js";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 4000;

ConnectDB();

const app = express();
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
