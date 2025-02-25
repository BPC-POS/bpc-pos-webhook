import { Entity, Column, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import {
  Order,
  LoyaltyPoint,
  LoyaltyTransaction,
  MediaFile,
  ThirdPartyLog,
  Return,
} from './index';

@Entity({ name: 'members' })
export class Member extends CustomBaseEntity {
  @Column({ nullable: true })
  avatar!: number;

  @Column({ unique: true })
  email!: string;

  @Column({ nullable: true })
  phone_number!: string;

  @Column({ nullable: true })
  gender!: number;

  @Column({ type: 'timestamp', nullable: true })
  day_of_birth!: Date;

  @Column({ nullable: true })
  token!: string;

  @Column()
  name!: string;

  @Column()
  password!: string;

  @Column({ default: 1 })
  status!: number;

  @Column({ type: 'jsonb', nullable: true })
  first_login!: any;

  @Column({ type: 'jsonb', nullable: true })
  meta!: any;

  @OneToMany(() => Order, (order) => order.member)
  orders!: Order[];

  @OneToMany(() => LoyaltyPoint, (loyaltyPoint) => loyaltyPoint.member)
  loyaltyPoints!: LoyaltyPoint[];

  @OneToMany(
    () => LoyaltyTransaction,
    (loyaltyTransaction) => loyaltyTransaction.member,
  )
  loyaltyTransactions!: LoyaltyTransaction[];

  @OneToMany(() => MediaFile, (mediaFile) => mediaFile.member)
  mediaFiles!: MediaFile[];

  @OneToMany(() => ThirdPartyLog, (thirdPartyLog) => thirdPartyLog.member)
  thirdPartyLogs!: ThirdPartyLog[];

  @OneToMany(() => Return, (returnEntity) => returnEntity.member)
  returns!: Return[];
}
