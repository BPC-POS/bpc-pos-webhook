import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { ProductVariant, ProductAttribute } from './index';

@Entity({ name: 'variant_attributes' })
export class VariantAttribute extends CustomBaseEntity {
    @Column()
    variant_id!: number;

    @Column()
    attribute_id!: number;

    @Column('text')
    value!: string;

    @ManyToOne(() => ProductVariant, variant => variant.variantAttributes)
    variant!: ProductVariant;

    @ManyToOne(() => ProductAttribute, attribute => attribute.variantAttributes)
    attribute!: ProductAttribute;
}