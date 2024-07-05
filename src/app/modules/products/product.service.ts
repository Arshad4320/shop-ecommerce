import IProduct from "./product.interface";
import { ProductModel } from "./product.model";
//product crate service function
const crateProduct = (product: IProduct) => {
  const result = ProductModel.create(product);
  return result;
};
//product searchTerm function
const searchProducts = async (searchTerm?: string) => {
  let query = {};
  if (searchTerm) {
    query = { name: { $regex: searchTerm, $options: "i" } };
  }
  const result = await ProductModel.find(query).exec();

  return result;
};
//single product retrive service function
const retriveSingleProduct = (_id: string) => {
  const result = ProductModel.findOne({ _id });
  return result;
};
//product update service function
const updateProduct = (_id: string, data: IProduct) => {
  const result = ProductModel.findByIdAndUpdate({ _id }, data, { new: true });
  return result;
};
//product delete service function
const deleteProduct = (_id: string) => {
  const result = ProductModel.findByIdAndDelete({ _id });
  return result;
};
const productInventory = async (productId: string, quantity: number) => {
  const product = await ProductModel.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  if (product.inventory.quantity === 0) {
    product.inventory.inStock = false;
    await product.save();
    throw Error("Product is out of stock");
  }
  product.inventory.quantity -= quantity;
  return await product.save();
};

export const ProductService = {
  crateProduct,
  searchProducts,
  retriveSingleProduct,
  updateProduct,
  deleteProduct,
  productInventory,
};
