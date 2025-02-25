import { Entity, Column, OneToMany } from 'typeorm';
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

  @OneToMany(() => Employee, (employee) => employee.role, {
    createForeignKeyConstraints: false,
  })
  employees!: Employee[];

  @OneToMany(() => RoleAction, (roleAction) => roleAction.role, {
    createForeignKeyConstraints: false,
  })
  roleActions!: RoleAction[];

  @OneToMany(() => User, (user) => user.role, {
    createForeignKeyConstraints: false,
  })
  users!: User[];
}
