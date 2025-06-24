import { Request, Response } from 'express';
import * as productService from '../services/productService';

// export const getAllProducts = async (req: Request, res: Response) => {
//   const products = await productService.getAllProducts();
//   res.json(products);
// };

export const saveShoppingList = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProducts(req.body);
    res.status(201).json(product);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
