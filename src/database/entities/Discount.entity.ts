import { Entity, Column } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';

@Entity({ name: 'discounts' })
export class Discount extends CustomBaseEntity {
    @Column({ type: 'varchar' })
    code!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'numeric' })
    discount_percentage!: number;

    @Column({ type: 'timestamp' })
    start_date!: Date;

    @Column({ type: 'timestamp' })
    end_date!: Date;

    @Column({ type: 'integer' })
    status!: number;

    @Column({ type: 'jsonb', nullable: true })
    meta!: any;
}