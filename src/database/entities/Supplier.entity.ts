import { Entity, Column, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { PurchaseOrder } from './index';

@Entity({ name: 'suppliers' })
export class Supplier extends CustomBaseEntity {
    @Column()
    name!: string;

    @Column({ nullable: true })
    contact_person!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    phone!: string;

    @Column({ type: 'text', nullable: true })
    address!: string;

    @Column({ default: 1 })
    status!: number;

    @Column({ type: 'jsonb', nullable: true })
    meta!: any;

    @OneToMany(() => PurchaseOrder, purchaseOrder => purchaseOrder.supplier)
    purchaseOrders!: PurchaseOrder[];
}