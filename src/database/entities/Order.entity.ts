import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import {
  Member,
  OrderItem,
  Payment,
  LoyaltyTransaction,
  Return,
} from './index';

@Entity({ name: 'orders' })
export class Order extends CustomBaseEntity {
  @Column()
  member_id!: number;

  @Column('decimal')
  total_amount!: number;

  @Column()
  status!: number;

  @Column('jsonb', { nullable: true })
  meta!: any;

  @ManyToOne(() => Member, (member) => member.orders)
  member!: Member;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems!: OrderItem[];

  @OneToMany(() => Payment, (payment) => payment.order)
  payments!: Payment[];

  @OneToMany(
    () => LoyaltyTransaction,
    (loyaltyTransaction) => loyaltyTransaction.order,
  )
  loyaltyTransactions!: LoyaltyTransaction[];

  @OneToMany(() => Return, (returnEntity) => returnEntity.order)
  returns!: Return[];
}
