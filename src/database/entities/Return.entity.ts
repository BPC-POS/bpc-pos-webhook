import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Order, Member, ReturnItem } from './index';

@Entity({ name: 'returns' })
export class Return extends CustomBaseEntity {
    @Column()
    order_id!: number;

    @Column()
    member_id!: number;

    @Column('text')
    return_reason!: string;

    @Column()
    status!: number;

    @Column('numeric')
    refund_amount!: number;

    @Column()
    processed_by!: number;

    @Column({ type: 'jsonb', nullable: true })
    meta!: any;

    @ManyToOne(() => Order, order => order.returns)
    order!: Order;

    @ManyToOne(() => Member, member => member.returns)
    member!: Member;

    @OneToMany(() => ReturnItem, returnItem => returnItem.return)
    returnItems!: ReturnItem[];
}