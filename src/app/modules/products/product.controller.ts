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
// const retriveProducts = async (req: Request, res: Response) => {
//   try {
//     const result = await ProductService.retriveProducts();
//     res.status(200).json({
//       status: 200,
//       message: "Product Retrive Successfully",
//       data: result,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: true,
//       message: err,
//     });
//   }
// };
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
    res.status(400).json({
      success: false,
      message: err || "something went wrong",
    });
  }
};

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
  searchProduct,
  retriveSingleProduct,
  updateProduct,
  deleteProduct,
  // retriveProducts,
};
