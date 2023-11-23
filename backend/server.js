import express from "express";
import productRoutes from "./routes/product-routes.js";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

ConnectDB();

const app = express();

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
