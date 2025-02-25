import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Employee } from './index';

@Entity({ name: 'shifts' })
export class Shift extends CustomBaseEntity {
    @Column()
    employee_id!: number;

    @Column()
    start_time!: Date;

    @Column()
    end_time!: Date;

    @Column('jsonb', { nullable: true })
    meta!: any;

    @ManyToOne(() => Employee, employee => employee.shifts)
    employee!: Employee;
}