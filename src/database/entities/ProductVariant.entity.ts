import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Product, VariantAttribute } from './index';

@Entity({ name: 'product_variants' })
export class ProductVariant extends CustomBaseEntity {
    @Column()
    product_id!: number;

    @Column()
    sku!: string;

    @Column('decimal')
    price!: number;

    @Column()
    stock_quantity!: number;

    @Column()
    status!: number;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Product, product => product.productVariants)
    product!: Product;

    @OneToMany(() => VariantAttribute, variantAttribute => variantAttribute.variant)
    variantAttributes!: VariantAttribute[];
}