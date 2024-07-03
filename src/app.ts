import express, { Request, Response } from "express";

import cors from "cors";
import { productRouter } from "./app/modules/products/product.router";
// express
const app = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// application routes
app.use("/api/v1", productRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
