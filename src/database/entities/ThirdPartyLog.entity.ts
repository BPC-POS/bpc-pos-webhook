import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Member } from './index';

@Entity('third_party_logs')
export class ThirdPartyLog extends CustomBaseEntity {
    @Column()
    type!: number;

    @Column()
    status!: number;

    @Column()
    member_id!: number;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Member, member => member.thirdPartyLogs)
    member!: Member;
}