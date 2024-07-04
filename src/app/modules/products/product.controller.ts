import { Request, Response } from "express";
import { ProductService } from "./product.service";
import IProduct from "./product.interface";
// import productValidation from "./product.validation";

const crateProduct = async (req: Request, res: Response) => {
  try {
    const productType: IProduct = req.body;
    // const validationProduct = productValidation.parse(productType);
    const result = await ProductService.crateProduct(productType);

    res.status(200).json({
      success: true,
      message: "product crated successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      seccess: false,
      message: err,
    });
  }
};
const retriveProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.retrieveProducts();
    res.status(200).json({
      success: true,
      message: "Products Retrived successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
const retriveSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.retriveSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product Retrive Successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { data } = req.body;
    const result = await ProductService.updateProduct(productId, data);
    res.status(200).json({
      success: true,
      message: "Product Update Successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteProduct(id);
    res.status(200).json({
      success: true,
      message: "Product deleted succssfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
export const productController = {
  crateProduct,
  retriveProduct,
  retriveSingleProduct,
  updateProduct,
  deleteProduct,
};
