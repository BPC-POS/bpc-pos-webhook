import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Product, ProductAttribute } from './index';

@Entity({ name: 'product_attribute_values' })
export class ProductAttributeValue extends CustomBaseEntity {
  @Column()
  product_id!: number;

  @Column()
  attribute_id!: number;

  @Column('text')
  value!: string;

  @ManyToOne(() => Product, (product) => product.productAttributeValues)
  product!: Product;

  @ManyToOne(
    () => ProductAttribute,
    (attribute) => attribute.productAttributeValues,
  )
  attribute!: ProductAttribute;
}
