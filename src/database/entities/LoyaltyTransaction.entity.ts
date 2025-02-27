import { Entity, Column, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Member, Order } from './index';

@Entity({ name: 'loyalty_transactions' })
export class LoyaltyTransaction extends CustomBaseEntity {
    @Column()
    member_id!: number;

    @Column()
    order_id!: number;

    @Column()
    points_earned!: number;

    @Column()
    points_spent!: number;

    @Column()
    transaction_type!: string;

    @ManyToOne(() => Member, member => member.loyaltyTransactions)
    member!: Relation<Member>;

    @ManyToOne(() => Order, order => order.loyaltyTransactions)
    order!: Relation<Order>;
}