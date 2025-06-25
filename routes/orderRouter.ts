import { Router } from 'express';
import * as shoppingListController from '../controllers/orderController';

const router = Router();
router.post('/save-shopping-list', shoppingListController.saveShoppingList);

export default router;
