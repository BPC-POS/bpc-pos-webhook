import { Entity, Column, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Product } from './index';

@Entity({ name: 'inventory' })
export class Inventory extends CustomBaseEntity {
  @Column()
  product_id!: number;

  @Column()
  quantity!: number;

  @Column()
  adjustment_type!: string;

  @Column('jsonb', { nullable: true })
  meta!: any;

  @ManyToOne(() => Product, (product) => product.inventory)
  product!: Relation<Product>;
}
