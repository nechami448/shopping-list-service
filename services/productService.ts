import { AppDataSource } from '../data-source';
// import { Category } from '../entity/category';
import { Product } from '../entity/product';


// export const getAllProducts = async () => {
//   const repo = AppDataSource.getRepository(Category);
//   return await repo.find({
//     relations: ['products'],
//     order: {
//       name: 'ASC',
//       products: {
//         productName: 'ASC'
//       }
//     }
//   });
// };

export const createProducts = async (
  data: { productName: string; quantity: number; categoryId: number; }[]) => {
  const productRepo = AppDataSource.getRepository(Product);
  const productsToSave = data.map(item =>
    productRepo.create({
      productName: item.productName,
      quantity: item.quantity,
      category: { id: item.categoryId }, // לא צריך לטעון מה-DB
    })
  );
  return await productRepo.save(productsToSave);
};
