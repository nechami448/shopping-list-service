import { Request, Response } from 'express';
import * as categoryService from '../services/categoryService';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const products = await categoryService.getAllCategories();
    res.json(products);
  }
  catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
