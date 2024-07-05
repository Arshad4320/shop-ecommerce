"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const orderValidation = zod_1.default.object({
    email: zod_1.default.string({ required_error: "email is required" }),
    productId: zod_1.default.string({ required_error: "productId is required" }),
    price: zod_1.default.number({ required_error: "price is required" }),
    quantity: zod_1.default.number({ required_error: "quantity is required" }),
});
exports.default = orderValidation;
