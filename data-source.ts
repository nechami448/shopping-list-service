import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './entity/product';
import { Category } from './entity/category';
import * as dotenv from 'dotenv';
import { Order } from './entity/order';
import { OrderItem } from './entity/productOrder';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Product, Category, Order, OrderItem],
  options: {
    encrypt: false
  }
});
