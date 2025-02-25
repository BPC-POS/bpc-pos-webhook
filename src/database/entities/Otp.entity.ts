import { Entity, Column } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';

@Entity({ name: 'otps' })
export class Otp extends CustomBaseEntity {
    @Column({ type: 'varchar' })
    phone_number!: string;

    @Column({ type: 'varchar' })
    code!: string;

    @Column({ type: 'jsonb', nullable: true })
    token!: any;

    @Column({ type: 'integer' })
    status!: number;

    @Column({ type: 'integer' })
    type!: number;

    @Column({ type: 'varchar', nullable: true })
    ip!: string;

    @Column({ type: 'jsonb', nullable: true })
    meta!: any;
}