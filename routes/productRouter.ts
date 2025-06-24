import { Router } from 'express';
import * as shoppingListController from '../controllers/productController';

const router = Router();

// router.get('/get-all-shopping-list', shoppingListController.getAllProducts);
router.post('/create-products', shoppingListController.saveShoppingList);

export default router;
