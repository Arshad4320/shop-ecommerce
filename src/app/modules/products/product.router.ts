import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/api/products", productController.crateProduct);

router.get("/api/products", productController.searchProduct);

router.get("/api/products/:productId", productController.retriveSingleProduct);

router.put("/api/products/:productId", productController.updateProduct);
router.delete("/api/products/:productId", productController.deleteProduct);
export const productRouter = router;
