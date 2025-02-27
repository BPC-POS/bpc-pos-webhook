import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Supplier, User, PurchaseOrderItem } from './index';

@Entity({ name: 'purchase_orders' })
export class PurchaseOrder extends CustomBaseEntity {
    @Column()
    supplier_id!: number;

    @Column('decimal')
    total_amount!: number;

    @Column()
    status!: number;

    @Column()
    created_by!: number;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Supplier, supplier => supplier.purchaseOrders)
    supplier!: Relation<Supplier>;

    @ManyToOne(() => User, user => user.purchaseOrders)
    createdBy!: Relation<User>;

    @OneToMany(() => PurchaseOrderItem, purchaseOrderItem => purchaseOrderItem.purchaseOrder)
    purchaseOrderItems!: Relation<PurchaseOrderItem>[];
}