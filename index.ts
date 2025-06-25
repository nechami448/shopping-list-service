import express from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import { loadInitialCategories } from './services/categoryService'
import productRoutes from './routes/orderRouter';
import categoryRoutes from './routes/categoryRouter';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/order', productRoutes);
app.use('/api/category', categoryRoutes);
AppDataSource.initialize().then(async () => {
  console.log('Connected to DB');
  await loadInitialCategories();

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});