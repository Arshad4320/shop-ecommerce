import IProduct from "./product.interface";
import { ProductModel } from "./product.model";

const crateProduct = (product: IProduct) => {
  const result = ProductModel.create(product);
  return result;
};
const retrieveProducts = () => {
  const result = ProductModel.find();
  return result;
};
const retriveSingleProduct = (_id: string) => {
  const result = ProductModel.findOne({ _id });
  return result;
};
const updateProduct = (_id: string, data: object) => {
  const result = ProductModel.findByIdAndUpdate({ _id }, data);
  return result;
};
const deleteProduct = (_id: string) => {
  const result = ProductModel.updateOne({ _id, isDeleted: true });
  return result;
};
export const ProductService = {
  crateProduct,
  retrieveProducts,
  retriveSingleProduct,
  updateProduct,
  deleteProduct,
};
