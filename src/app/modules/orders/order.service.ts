import { IOrder } from "./order.interface";
import { orderModel } from "./order.model";

const crateOrder = (order: IOrder) => {
  const result = orderModel.create(order);
  return result;
};
const retriveOrder = () => {
  const result = orderModel.find();
  return result;
};
const retriveSingleOrder = (email: string) => {
  const result = orderModel.findOne({ email });
  return result;
};
const updateOrder = (email: string, data: IOrder) => {
  const result = orderModel.findOneAndUpdate({ email }, data, { new: true });
  return result;
};
const deleteOrder = (_id: string) => {
  const result = orderModel.findOneAndDelete({ _id });
  return result;
};
export const orderServices = {
  crateOrder,
  retriveOrder,
  retriveSingleOrder,
  updateOrder,
  deleteOrder,
};
