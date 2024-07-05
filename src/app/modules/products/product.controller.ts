import { Request, Response } from "express";
import { ProductService } from "./product.service";
import IProduct from "./product.interface";

import productValidation from "./product.validation";
import { ZodError } from "zod";
import mongoose from "mongoose";
//product crate controller function
const crateProduct = async (req: Request, res: Response) => {
  try {
    const productType: IProduct = req.body;
    const validateProduct = productValidation.parse(productType);
    const result = await ProductService.crateProduct(validateProduct);

    res.status(200).json({
      success: true,
      message: "product created successfully",
      data: result,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({
        success: false,
        message: err.name,
        errors: err.errors.map((e) => ({
          name: e.message,
        })),
      });
    } else if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({
        success: false,
        errors: err.name,
        message: err.message,
      });
    }
  }
};
//product search controller function
const searchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;

    const result = await ProductService.searchProducts(searchTerm);

    res.status(200).json({
      success: true,
      message: "Product fetched Successfully",
      data: result,
    });
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({
        success: false,
        errors: err.name,
        message: err.message,
      });
    }
  }
};
//single product retrive controller function
const retriveSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.retriveSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched Successfully",
      data: result,
    });
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({
        success: false,
        errors: err.name,
        message: err.message,
      });
    }
  }
};
//product update controller function
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const data = req.body;

    const result = await ProductService.updateProduct(productId, data);

    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
      data: result,
    });
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({
        success: false,
        errors: err.name,
        message: err.message,
      });
    }
  }
};
//product delete controller function
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted succssfully",
      data: result,
    });
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({
        success: false,
        errors: err.name,
        message: err.message,
      });
    }
  }
};
export const productController = {
  crateProduct,
  searchProduct,
  retriveSingleProduct,
  updateProduct,
  deleteProduct,
};
