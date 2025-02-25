import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Product, Tax } from './index';

@Entity({ name: 'product_taxes' })
export class ProductTax extends CustomBaseEntity {
    @Column()
    product_id!: number;

    @Column()
    tax_id!: number;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Product, product => product.productTaxes)
    product!: Product;

    @ManyToOne(() => Tax, tax => tax.productTaxes)
    tax!: Tax;
}