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
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
//product crate service function
const crateProduct = (product) => {
    const result = product_model_1.ProductModel.create(product);
    return result;
};
//product searchTerm function
const searchProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (searchTerm) {
        query = { name: { $regex: searchTerm, $options: "i" } };
    }
    const result = yield product_model_1.ProductModel.find(query).exec();
    return result;
});
//single product retrive service function
const retriveSingleProduct = (_id) => {
    const result = product_model_1.ProductModel.findOne({ _id });
    return result;
};
//product update service function
const updateProduct = (_id, data) => {
    const result = product_model_1.ProductModel.findByIdAndUpdate({ _id }, data, { new: true });
    return result;
};
//product delete service function
const deleteProduct = (_id) => {
    const result = product_model_1.ProductModel.findByIdAndDelete({ _id });
    return result;
};
const productInventory = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.ProductModel.findById(productId);
    if (!product) {
        throw new Error("Product not found");
    }
    if (product.inventory.quantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    if (product.inventory.quantity === 0) {
        product.inventory.inStock = false;
        yield product.save();
        throw Error("Product is out of stock");
    }
    product.inventory.quantity -= quantity;
    return yield product.save();
});
exports.ProductService = {
    crateProduct,
    searchProducts,
    retriveSingleProduct,
    updateProduct,
    deleteProduct,
    productInventory,
};
