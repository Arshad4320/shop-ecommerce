import express, { Request, Response } from "express";

import cors from "cors";
import { productRouter } from "./app/modules/products/product.router";
import { orderRouter } from "./app/modules/orders/order.router";
// express
const app = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// application routes
app.use("/", productRouter);
app.use("/", orderRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running on port 5000");
});

export default app;
