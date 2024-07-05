import { z } from "zod";

const productValidation = z.object({
  name: z.string({ required_error: "Name is required" }),

  description: z.string({ required_error: "description is required" }),
  price: z.number({ required_error: "price is required" }),
  category: z.string({ required_error: "category is required" }),
  tags: z.array(z.string({ required_error: "tags is required" })),

  variants: z.array(
    z.object({
      type: z.string({ required_error: "type is required" }),
      value: z.string({ required_error: "value is required" }),
    }),
  ),
  inventory: z.object({
    quantity: z.number({ required_error: "quantity is required" }),
    inStock: z.boolean({ required_error: "stock is required" }),
  }),
});

export default productValidation;
