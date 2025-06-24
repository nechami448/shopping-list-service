import { Request, Response } from 'express';
import * as categoryService from '../services/categoryService';

export const getAllCategories = async (req: Request, res: Response) => {  
  const products = await categoryService.getAllCategories();
  res.json(products);
};
