import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Category } from './category';
import { OrderItem } from './productOrder';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId!: number;

  @Column()
  productName!: string;

  @ManyToOne(() => Category, category => category.products)
  category!: Category;

  @OneToMany(() => OrderItem, orderItem => orderItem.product)
  orderItems!: OrderItem[];
}