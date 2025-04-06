import { Injectable } from '@nestjs/common';
import { PaymentWebhookDto } from './dto/create-hook.dto';
import { Payment } from '../../database/entities/Payment.entity';
import { IsNull, Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class HooksService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly notificationService: NotificationService,
  ) {}

  async processPayment(paymentWebhookDto: PaymentWebhookDto): Promise<Payment> {
    let orderId = paymentWebhookDto.id;
    if (paymentWebhookDto.description) {
      const decodedDescription = decodeURIComponent(
        paymentWebhookDto.description,
      );
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

    const savedPayment = await this.paymentRepository.save(payment);

    // Send notifications to users with firebase_token
    await this.sendPaymentNotificationsToUsers(savedPayment);

    return savedPayment;
  }

  private async sendPaymentNotificationsToUsers(
    payment: Payment,
  ): Promise<void> {
    // Find users with firebase_token
    const users = await this.userRepository.find({
      where: {
        firebase_token: Not(IsNull()),
      },
    });

    const notificationTitle = 'Cập nhật thanh toán';
    const notificationBody = `Thanh toán ${payment.amount} qua ${payment.payment_method} đã được ${payment.status === 1 ? 'xác nhận' : 'xử lý'}.`;

    for (const user of users) {
      if (user.firebase_token) {
        try {
          await this.notificationService.sendingNotificationOneUser({
            token: user.firebase_token,
            title: notificationTitle,
            body: notificationBody,
          });
        } catch (error) {
          console.error(
            `Failed to send notification to user ${user.id}:`,
            error,
          );
        }
      }
    }
  }
}
