import { Entity, Column, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { RbacAction } from './index';

@Entity({ name: 'rbac_modules' })
export class RbacModule extends CustomBaseEntity {
  @Column()
  name!: string;

  @Column()
  key!: string;

  @Column('text', { nullable: true })
  description!: string;

  @Column('jsonb', { nullable: true })
  meta!: object;

  @OneToMany(() => RbacAction, rbacAction => rbacAction.rbacModule)
  rbacActions!: RbacAction[];
}
