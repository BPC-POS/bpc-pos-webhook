import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDTO } from './dto/notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
  @Post('send')
  async sendNotidication(@Body() sendNotification: NotificationDTO) {
    return await this.notificationService.sendingNotificationOneUser(
      sendNotification,
    );
  }
  @Post('send-all')
  async sendNotidicationAllUser() {
    return await this.notificationService.notiRemind();
  }
}
