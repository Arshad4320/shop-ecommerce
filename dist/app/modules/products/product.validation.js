"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidation = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name is required" }),
    description: zod_1.z.string({ required_error: "description is required" }),
    price: zod_1.z.number({ required_error: "price is required" }),
    category: zod_1.z.string({ required_error: "category is required" }),
    tags: zod_1.z.array(zod_1.z.string({ required_error: "tags is required" })),
    variants: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.string({ required_error: "type is required" }),
        value: zod_1.z.string({ required_error: "value is required" }),
    })),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number({ required_error: "quantity is required" }),
        inStock: zod_1.z.boolean({ required_error: "stock is required" }),
    }),
});
exports.default = productValidation;
