import { Request, Response } from "express";
import { orderServices } from "./order.service";
import orderValidation from "./order.validatation";
import { ZodError } from "zod";
import mongoose from "mongoose";

//order create controller function
const crateOrder = async (req: Request, res: Response) => {
  try {
    const validateOrder = orderValidation.parse(req.body);
    const result = await orderServices.crateOrder(validateOrder);

    res.status(200).json({
      success: true,
      message: "order created successfully",
      data: result,
    });
  } catch (err) {
    // Handle validation errors
    if (err instanceof ZodError) {
      res.status(400).json({
        success: false,
        message: err.name,
        errors: err.errors.map((e) => ({
          message: e.message,
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
    if (err instanceof mongoose.Error.CastError) {
      res.status(400).json({
        success: false,
        errors: err.name,
        message: "something went wrong",
      });
    }
  }
};

export const orderController = {
  crateOrder,
  retriveOrder,
};
