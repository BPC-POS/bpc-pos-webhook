import { Injectable, Logger } from '@nestjs/common';
import admin from 'firebase-admin';
import { NotificationDTO } from './dto/notification.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

admin.initializeApp({
  credential: admin.credential.cert('./bpc-pos.json'),
});
@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  constructor() {}
  async sendingNotificationOneUser(notificationDto: NotificationDTO) {
    const payload = {
      token: notificationDto.token || '',
      notification: {
        title: notificationDto.title,
        body: notificationDto.body,
      },
    };
    return admin
      .messaging()
      .send(payload)
      .then(() => {
        return {
          success: true,
        };
      })
      .catch((error) => {
        this.logger.error('Notification error: ', error);
        return {
          success: false,
        };
      });
  }

  @Cron(CronExpression.EVERY_DAY_AT_9PM)
  async notiRemind() {
    const topic = 'all';
    const payload = {
      notification: {
        title: 'Hãy nhận thu chi',
        body: 'Hãy nhập thu chi ngày hôm nay của bạn',
      },
      topic,
    };
    return admin
      .messaging()
      .send(payload)
      .then(() => {
        return {
          success: true,
        };
      })
      .catch((error) => {
        this.logger.error('Notification error: ', error);
        return {
          success: false,
        };
      });
  }
}
