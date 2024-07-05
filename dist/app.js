"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = require("./app/modules/products/product.router");
const order_router_1 = require("./app/modules/orders/order.router");
// express
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// application routes
app.use("/", product_router_1.productRouter);
app.use("/", order_router_1.orderRouter);
app.get("/", (req, res) => {
    res.send("Server is running on port 5000");
});
exports.default = app;
