import { Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { OrderItem } from './productOrder';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    orderId!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @OneToMany(() => OrderItem, orderItem => orderItem.product)
    orderItems!: OrderItem[];
}