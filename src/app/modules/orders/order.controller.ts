import { Request, Response } from "express";
import { orderServices } from "./order.service";

//order create controller function
const crateOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.crateOrder(req.body);
    res.status(200).json({
      success: true,
      message: "order created successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
//order retrive controller function
const retriveOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const result = await orderServices.retriveOrder(email);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

export const orderController = {
  crateOrder,
  retriveOrder,
};
