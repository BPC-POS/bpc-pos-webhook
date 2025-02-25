import { Entity, Column } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';

@Entity({ name: 'coupons' })
export class Coupon extends CustomBaseEntity {
    @Column({ type: 'varchar' })
    code!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'numeric', nullable: true })
    discount_amount!: number;

    @Column({ type: 'numeric', nullable: true })
    discount_percentage!: number;

    @Column({ type: 'int', nullable: true })
    max_usage!: number;

    @Column({ type: 'int', default: 0 })
    used_count!: number;

    @Column({ type: 'timestamp', nullable: true })
    start_date!: Date;

    @Column({ type: 'timestamp', nullable: true })
    end_date!: Date;

    @Column({ type: 'int', default: 1 })
    status!: number;

    @Column({ type: 'jsonb', nullable: true })
    meta!: any;
}