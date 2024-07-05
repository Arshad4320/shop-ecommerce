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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_validatation_1 = __importDefault(require("./order.validatation"));
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
//order create controller function
const crateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validateOrder = order_validatation_1.default.parse(req.body);
        const result = yield order_service_1.orderServices.crateOrder(validateOrder);
        res.status(200).json({
            success: true,
            message: "order created successfully",
            data: result,
        });
    }
    catch (err) {
        // Handle validation errors
        if (err instanceof zod_1.ZodError) {
            res.status(400).json({
                success: false,
                message: err.name,
                errors: err.errors.map((e) => ({
                    message: e.message,
                })),
            });
        }
        else if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(400).json({
                success: false,
                errors: err.name,
                message: err.message,
            });
        }
    }
});
//order retrive controller function
const retriveOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.orderServices.retriveOrder(email);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully",
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
exports.orderController = {
    crateOrder,
    retriveOrder,
};
