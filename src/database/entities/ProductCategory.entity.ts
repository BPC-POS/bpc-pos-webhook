import { Entity, Column, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { ProductCategoryMapping } from './index';

@Entity({ name: 'product_categories' })
export class ProductCategory extends CustomBaseEntity {
    @Column({ nullable: true })
    parent_id!: number;

    @Column()
    name!: string;

    @Column({ nullable: true })
    description!: string;

    @Column()
    status!: number;

    @Column({ type: 'jsonb', nullable: true })
    meta!: any;

    @OneToMany(() => ProductCategoryMapping, mapping => mapping.category)
    productCategoryMappings!: Relation<ProductCategoryMapping>[];
}