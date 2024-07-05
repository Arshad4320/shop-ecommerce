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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const product_service_1 = require("../products/product.service");
const order_model_1 = require("./order.model");
const crateOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = order_model_1.orderModel.create(order);
    yield product_service_1.ProductService.productInventory(order.productId, order.quantity);
    return result;
});
const retriveOrder = (email) => {
    let query = {};
    if (email) {
        query = { email: { $regex: email, $options: "i" } };
    }
    const result = order_model_1.orderModel.find(query).exec();
    return result;
};
exports.orderServices = {
    crateOrder,
    retriveOrder,
};
