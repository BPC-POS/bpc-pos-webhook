import { Entity, Column, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Employee, RoleAction, User } from './index';

@Entity({ name: 'roles' })
export class Role extends CustomBaseEntity {
  @Column()
  name!: string;

  @Column()
  status!: number;

  @Column({ nullable: true })
  description!: string;

  @Column({ type: 'jsonb', nullable: true })
  meta!: object;

  @OneToMany(() => Employee, (employee) => employee.role)
  employees!: Relation<Employee>[];

  @OneToMany(() => RoleAction, (roleAction) => roleAction.role)
  roleActions!: Relation<RoleAction>[];

  @OneToMany(() => User, (user) => user.role)
  users!: Relation<User>[];
}
