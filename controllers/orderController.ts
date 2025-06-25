import { Request, Response } from 'express';
import * as productService from '../services/orderService';

export const saveShoppingList = async (req: Request, res: Response) => {
  try {
    const product = await productService.saveShoppingList(req.body);
    res.status(201).json(product);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
