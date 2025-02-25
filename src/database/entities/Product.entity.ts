import { Entity, Column, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import {
  ProductTax,
  Inventory,
  OrderItem,
  ProductCategoryMapping,
  ProductTag,
  ProductAttributeValue,
  ProductVariant,
  PurchaseOrderItem,
} from './index';

@Entity({ name: 'products' })
export class Product extends CustomBaseEntity {
  @Column()
  name!: string;

  @Column('text')
  description!: string;

  @Column('decimal')
  price!: number;

  @Column()
  sku!: string;

  @Column()
  stock_quantity!: number;

  @Column()
  status!: number;

  @Column('jsonb', { nullable: true })
  meta!: any;

  @OneToMany(() => ProductTax, (productTax) => productTax.product)
  productTaxes!: ProductTax[];

  @OneToMany(() => Inventory, (inventory) => inventory.product)
  inventory!: Inventory[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems!: OrderItem[];

  @OneToMany(() => ProductCategoryMapping, (mapping) => mapping.product)
  productCategoryMappings!: ProductCategoryMapping[];

  @OneToMany(() => ProductTag, (productTag) => productTag.product)
  productTags!: ProductTag[];

  @OneToMany(() => ProductAttributeValue, (value) => value.product)
  productAttributeValues!: ProductAttributeValue[];

  @OneToMany(() => ProductVariant, (variant) => variant.product)
  productVariants!: ProductVariant[];

  @OneToMany(
    () => PurchaseOrderItem,
    (purchaseOrderItem) => purchaseOrderItem.product,
  )
  purchaseOrderItems!: PurchaseOrderItem[];
}
