import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Member } from './Member.entity';

@Entity({ name: 'media_files' })
export class MediaFile extends CustomBaseEntity {
    @Column()
    member_id!: number;

    @Column('text')
    file_path!: string;

    @Column()
    status!: number;

    @Column()
    type!: number;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Member, member => member.mediaFiles)
    member!: Member;
}