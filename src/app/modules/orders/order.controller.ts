import { Request, Response } from "express";
import { orderServices } from "./order.service";

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
const retriveOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.retriveOrder();
    res.status(200).json({
      success: true,
      message: "Order Retrived successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};

const retriveSingleOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const result = await orderServices.retriveSingleOrder(email);
    res.status(200).json({
      success: true,
      message: "Order retrive successfully",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    });
  }
};
// const updateOrder = async (req: Request, res: Response) => {
//     try {
//         const { email } = req.body,
//         const {data}=req.body
//         const result=await orderServices.updateOrder()
//     } catch (err) {
//         res.status(400).json({
//             success: false,
//             message:err
//         })
//     }
// }
