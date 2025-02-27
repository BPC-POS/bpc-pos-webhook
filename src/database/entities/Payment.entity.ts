import { Entity, Column, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Order } from './index';

@Entity({ name: 'payments' })
export class Payment extends CustomBaseEntity {
    @Column()
    order_id!: number;

    @Column()
    payment_method!: string;

    @Column('decimal')
    amount!: number;

    @Column()
    status!: number;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Order, order => order.payments)
    order!: Relation<Order>;
}