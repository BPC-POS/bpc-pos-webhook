import { Module } from '@nestjs/common';
import { HooksController } from './hooks.controller';
import { HooksService } from './hooks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order, Payment, User } from '../../database/entities';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Order, User]), NotificationModule],
  controllers: [HooksController],
  providers: [HooksService],
})
export class HooksModule {}