import { ProductService } from "../products/product.service";
import { IOrder } from "./order.interface";
import { orderModel } from "./order.model";

const crateOrder = async (order: IOrder) => {
  const result = orderModel.create(order);

  await ProductService.productInventory(order.productId, order.quantity);

  return result;
};

const retriveOrder = (email?: string) => {
  let query = {};
  if (email) {
    query = { email: { $regex: email, $options: "i" } };
  }
  const result = orderModel.find(query).exec();
  return result;
};

export const orderServices = {
  crateOrder,
  retriveOrder,
};
