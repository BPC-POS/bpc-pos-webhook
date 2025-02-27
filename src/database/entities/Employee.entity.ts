import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Role, Shift } from './index';

@Entity({ name: 'employees' })
export class Employee extends CustomBaseEntity {
  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone_number!: string;

  @Column()
  role_id!: number;

  @Column()
  status!: number;

  @Column('jsonb', { nullable: true })
  meta!: any;

  @ManyToOne(() => Role, (role) => role.employees)
  role!: Relation<Role>;

  @OneToMany(() => Shift, (shift) => shift.employee)
  shifts!: Relation<Shift>[];
}
