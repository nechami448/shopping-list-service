import { Router } from 'express';
import * as shoppingListController from '../controllers/orderController';

const router = Router();

// router.get('/get-all-shopping-list', shoppingListController.getAllProducts);
router.post('/save-shopping-list', shoppingListController.saveShoppingList);

export default router;
