import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { PurchaseOrder, Product } from './index';

@Entity({ name: 'purchase_order_items' })
export class PurchaseOrderItem extends CustomBaseEntity {
  @Column()
  purchase_order_id!: number;

  @Column()
  product_id!: number;

  @Column()
  quantity!: number;

  @Column('decimal')
  unit_price!: number;

  @ManyToOne(() => PurchaseOrder, purchaseOrder => purchaseOrder.purchaseOrderItems)
  purchaseOrder!: PurchaseOrder;

  @ManyToOne(() => Product, product => product.purchaseOrderItems)
  product!: Product;
}
