import { Injectable } from '@nestjs/common';
import { PaymentWebhookDto } from './dto/create-hook.dto';
import { Payment } from '../../database/entities/Payment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HooksService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async processPayment(paymentWebhookDto: PaymentWebhookDto): Promise<Payment> {
    let orderId = paymentWebhookDto.id;
    if (paymentWebhookDto.description) {
      const decodedDescription = decodeURIComponent(paymentWebhookDto.description);
      const match = decodedDescription.match(/(\d+)$/);
      if (match && match[1]) {
        orderId = parseInt(match[1], 10) || paymentWebhookDto.id;
      }
    }

    const payment = this.paymentRepository.create({
      order_id: orderId,
      payment_method: paymentWebhookDto.gateway,
      amount: paymentWebhookDto.transferAmount,
      status: paymentWebhookDto.transferType === 'in' ? 1 : 0,
      meta: paymentWebhookDto,
    });

    return this.paymentRepository.save(payment);
  }
}