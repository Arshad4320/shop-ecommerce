export type TTags = [tags: string];
export type TVariants = [
  {
    type: string;
    value: string;
  }
];

export type TInventory = {
  quantity: number;
  inStock: boolean;
};
interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: TTags;
  variants: TVariants;
  inventory: TInventory;
}

export default IProduct;
