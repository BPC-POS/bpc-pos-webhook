import { Body, Controller, Post } from '@nestjs/common';
import { HooksService } from './hooks.service';
import { PaymentWebhookDto } from './dto/create-hook.dto';

@Controller('webhooks')
export class HooksController {
  constructor(private readonly hooksService: HooksService) {}

  @Post('payment')
  async handlePaymentWebhook(@Body() paymentWebhookDto: PaymentWebhookDto) {
    return this.hooksService.processPayment(paymentWebhookDto);
  }
}