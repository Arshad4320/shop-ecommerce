import IProduct from "./product.interface";
import { ProductModel } from "./product.model";

const crateProduct = (product: IProduct) => {
  const result = ProductModel.create(product);
  return result;
};
// const retriveProducts = () => {
//   const result = ProductModel.find();
//   return result;
// };
const searchProducts = async (searchTerm?: string) => {
  let query = {};
  if (searchTerm) {
    query = { name: { $regex: searchTerm, $options: "i" } };
  }
  const result = await ProductModel.find(query).exec();

  return result;
};
const retriveSingleProduct = (_id: string) => {
  const result = ProductModel.findOne({ _id });
  return result;
};
const updateProduct = (_id: string, data: object) => {
  const result = ProductModel.findByIdAndUpdate({ _id }, data, { new: true });
  return result;
};
const deleteProduct = (_id: string) => {
  const result = ProductModel.findOneAndDelete({ _id });
  return result;
};
export const ProductService = {
  crateProduct,
  searchProducts,
  retriveSingleProduct,
  updateProduct,
  deleteProduct,
  // retriveProducts,
};
