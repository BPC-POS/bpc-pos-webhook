import { Module } from '@nestjs/common';
import { HooksController } from './hooks.controller';
import { HooksService } from './hooks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order, Payment } from '../../database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Order])],
  controllers: [HooksController],
  providers: [HooksService],
})
export class HooksModule {}