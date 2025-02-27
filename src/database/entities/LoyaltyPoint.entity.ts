import { Entity, Column, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Member } from './index';

@Entity({ name: 'loyalty_points' })
export class LoyaltyPoint extends CustomBaseEntity {
    @Column()
    member_id!: number;

    @Column()
    points!: number;

    @Column()
    lifetime_points!: number;

    @ManyToOne(() => Member, member => member.loyaltyPoints)
    member!: Relation<Member>;
}