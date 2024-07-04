import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();
router.post("/api/orders", orderController.crateOrder);
router.get("/api/orders", orderController.retriveOrder);

export const orderRouter = router;
