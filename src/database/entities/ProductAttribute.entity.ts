import { Entity, Column, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { ProductAttributeValue, VariantAttribute } from './index';

@Entity({ name: 'product_attributes' })
export class ProductAttribute extends CustomBaseEntity {
  @Column()
  name!: string;

  @Column()
  status!: number;

  @OneToMany(() => ProductAttributeValue, (value) => value.attribute)
  productAttributeValues!: Relation<ProductAttributeValue>[];

  @OneToMany(
    () => VariantAttribute,
    (variantAttribute) => variantAttribute.attribute,
  )
  variantAttributes!: Relation<VariantAttribute>[];
}
