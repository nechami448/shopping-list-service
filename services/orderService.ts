import { AppDataSource } from '../data-source';
import { Category } from '../entity/category';
import { Order } from '../entity/order';
import { Product } from '../entity/product';
import { OrderItem } from '../entity/productOrder';

export const saveShoppingList = async (
  data: { productName: string; quantity: number; categoryId: number }[]
) => {
  const productRepo = AppDataSource.getRepository(Product);
  const categoryRepo = AppDataSource.getRepository(Category);
  const orderRepo = AppDataSource.getRepository(Order);
  const orderItemRepo = AppDataSource.getRepository(OrderItem);

  const order = orderRepo.create(); // נוצר עם תאריך אוטומטי
  await orderRepo.save(order);

  for (const item of data) {
    // בדיקה אם המוצר כבר קיים (לפי שם וקטגוריה)
    let product = await productRepo.findOne({
      where: {
        productName: item.productName,
        category: { id: item.categoryId }
      },
      relations: ['category']
    });

    // אם לא קיים, יוצרים את המוצר
    if (!product) {
      const category = await categoryRepo.findOneBy({ id: item.categoryId });
      if (!category) {
        throw new Error(`Category with ID ${item.categoryId} not found`);
      }

      product = productRepo.create({
        productName: item.productName,
        category
      });
      await productRepo.save(product);
    }

    // מוסיפים את המוצר להזמנה דרך OrderItem
    const orderItem = orderItemRepo.create({
      order,
      product,
      quantity: item.quantity
    });
    await orderItemRepo.save(orderItem);
  }

  return { orderId: order.orderId };
};

