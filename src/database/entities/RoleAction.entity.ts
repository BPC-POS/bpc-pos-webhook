import { Entity, Column, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { RbacAction, Role } from './index';

@Entity({ name: 'role_actions' })
export class RoleAction extends CustomBaseEntity {
    @Column()
    rbac_action_id!: number;

    @Column()
    role_id!: number;

    @Column()
    status!: number;

    @Column('jsonb', { nullable: true })
    meta!: object;

    @ManyToOne(() => RbacAction, rbacAction => rbacAction.roleActions)
    rbacAction!: RbacAction;

    @ManyToOne(() => Role, role => role.roleActions)
    role!: Role;
}