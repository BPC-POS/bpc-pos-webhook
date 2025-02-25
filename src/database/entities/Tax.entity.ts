import { Entity, Column, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { ProductTax } from './index';

@Entity({ name: 'taxes' })
export class Tax extends CustomBaseEntity {
    @Column()
    name!: string;

    @Column('decimal')
    rate!: number;

    @Column('text')
    description!: string;

    @Column()
    status!: number;

    @Column('jsonb', { nullable: true })
    meta?: any;

    @OneToMany(() => ProductTax, productTax => productTax.tax)
    productTaxes!: ProductTax[];
}