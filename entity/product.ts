import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './category';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId!: number;

  @Column()
  productName!: string;

  @Column()
  quantity!: number;

  @ManyToOne(() => Category, category => category.products)
  category!: Category;
}