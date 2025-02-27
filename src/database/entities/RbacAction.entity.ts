import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { RbacModule, RoleAction } from './index';

@Entity({ name: 'rbac_actions' })
export class RbacAction extends CustomBaseEntity {
  @Column()
  name!: string;

  @Column()
  key!: string;

  @Column()
  rbac_module_id!: number;

  @Column()
  status!: number;

  @Column('text')
  description!: string;

  @Column('jsonb', { nullable: true })
  meta!: object;

  @ManyToOne(() => RbacModule, rbacModule => rbacModule.rbacActions)
  rbacModule!: Relation<RbacModule>;

  @OneToMany(() => RoleAction, roleAction => roleAction.rbacAction)
  roleActions!: Relation<RoleAction>[];
}
