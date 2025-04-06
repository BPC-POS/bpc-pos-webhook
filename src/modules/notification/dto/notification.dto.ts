import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NotificationDTO {
  @ApiProperty({
    description: 'FCM token for the device',
    example: 'c0JjalzCawR3tAZ7AY-o1J:APA91bHndoZWVg4fbIXkXrK-bB5WTD2TpE1pRXhQ_OPDNN16lcYoKEhnNsKQqEXzfPqMJdoispm4J5KnPbS4f7moDXVxoA-1iZ9f6Vh8I0cCAqAXbhOdXCM',
    required: false
  })
  @IsOptional()
  @IsString()
  token?: string;

  @ApiProperty({
    description: 'Title',
    example: 'Đơn hàng đã được thanh toán',
    required: true
  })
  @IsString()
  title!: string;

  @ApiProperty({
    description: 'Body',
    example: 'Đơn hàng của bạn đã được thanh toán thành công',
    required: true
  })
  @IsString()
  body!: string;
}
