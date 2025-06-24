import { Router } from 'express';
import * as categoryController from '../controllers/categoryController';

const router = Router();
router.get('/get-all-categories', categoryController.getAllCategories);

export default router;