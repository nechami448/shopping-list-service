import { Category } from '../entity/category';
import { AppDataSource } from '../data-source';

export const getAllCategories = async () => {
    const repo = AppDataSource.getRepository(Category);
    return await repo.find();
};

export const loadInitialCategories = async () => {
    const categoryRepo = AppDataSource.getRepository(Category);
    const categoryCount = await categoryRepo.count();
    if (categoryCount === 0) {
        await categoryRepo.save([
            { name: 'מוצרי נקיון' },
            { name: 'גבינות' },
            { name: 'ירקות ופירות' },
            { name: 'בשר ודגים' },
            { name: 'מאפים' },
        ]);
        console.log('קטגוריות ברירת מחדל נטענו');
    } else {
        console.log('קיימות כבר קטגוריות במסד');
    }
};
