"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
//product crate controller function
const crateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productType = req.body;
        const validateProduct = product_validation_1.default.parse(productType);
        const result = yield product_service_1.ProductService.crateProduct(validateProduct);
        res.status(200).json({
            success: true,
            message: "product created successfully",
            data: result,
        });
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            res.status(400).json({
                success: false,
                message: err.name,
                errors: err.errors.map((e) => ({
                    name: e.message,
                })),
            });
        }
        else if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(400).json({
                success: false,
                errors: err.name,
                message: "something went wrong",
            });
        }
    }
});
//product search controller function
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.ProductService.searchProducts(searchTerm);
        res.status(200).json({
            success: true,
            message: "Product fetched Successfully",
            data: result,
        });
    }
    catch (err) {
        if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(400).json({
                success: false,
                errors: err.name,
                message: "something went wrong",
            });
        }
    }
});
//single product retrive controller function
const retriveSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.retriveSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched Successfully",
            data: result,
        });
    }
    catch (err) {
        if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(400).json({
                success: false,
                errors: err.name,
                message: "something went wrong",
            });
        }
    }
});
//product update controller function
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = req.body;
        const result = yield product_service_1.ProductService.updateProduct(productId, data);
        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            data: result,
        });
    }
    catch (err) {
        if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(400).json({
                success: false,
                errors: err.name,
                message: "something went wrong",
            });
        }
    }
});
//product delete controller function
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.deleteProduct(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted succssfully",
            data: result,
        });
    }
    catch (err) {
        if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(400).json({
                success: false,
                errors: err.name,
                message: "something went wrong",
            });
        }
    }
});
exports.productController = {
    crateProduct,
    searchProduct,
    retriveSingleProduct,
    updateProduct,
    deleteProduct,
};
