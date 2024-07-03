import { Schema, model } from "mongoose";
import IProduct from "./product.interface";

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },

  variants: {
    type: [
      {
        type: String,
        value: String,
      },
    ],
    required: true,
  },
  inventory: {
    type: {
      quantity: Number,
      inStock: Boolean,
    },
    required: true,
  },
});

export const Product = model<IProduct>("Product", productSchema);
