import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Return, OrderItem } from './index';

@Entity({ name: 'return_items' })
export class ReturnItem extends CustomBaseEntity {
    @Column()
    return_id!: number;

    @Column()
    order_item_id!: number;

    @Column()
    quantity!: number;

    @Column('text')
    reason!: string;

    @ManyToOne(() => Return, returnEntity => returnEntity.returnItems)
    return!: Return;

    @ManyToOne(() => OrderItem, orderItem => orderItem.returnItems)
    orderItem!: OrderItem;
}