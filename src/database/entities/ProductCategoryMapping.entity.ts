import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Product, ProductCategory } from './index';

@Entity('product_category_mapping')
export class ProductCategoryMapping extends CustomBaseEntity {
    @Column()
    product_id!: number;

    @Column()
    category_id!: number;

    @ManyToOne(() => Product, product => product.productCategoryMappings)
    product!: Product;

    @ManyToOne(() => ProductCategory, category => category.productCategoryMappings)
    category!: ProductCategory;
}