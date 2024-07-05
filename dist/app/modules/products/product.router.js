"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/api/products", product_controller_1.productController.crateProduct);
router.get("/api/products", product_controller_1.productController.searchProduct);
router.get("/api/products/:productId", product_controller_1.productController.retriveSingleProduct);
router.put("/api/products/:productId", product_controller_1.productController.updateProduct);
router.delete("/api/products/:productId", product_controller_1.productController.deleteProduct);
exports.productRouter = router;
