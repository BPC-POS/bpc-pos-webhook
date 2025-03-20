export class CreateHookDto {}
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PaymentWebhookDto {
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsString()
  @IsNotEmpty()
  gateway!: string;

  @IsString()
  @IsNotEmpty()
  transactionDate!: string;

  @IsString()
  @IsNotEmpty()
  accountNumber!: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsNotEmpty()
  content!: string;

  @IsString()
  @IsNotEmpty()
  transferType!: string;

  @IsNumber()
  @IsNotEmpty()
  transferAmount!: number;

  @IsNumber()
  @IsNotEmpty()
  accumulated!: number;

  @IsString()
  @IsOptional()
  subAccount?: string;

  @IsString()
  @IsNotEmpty()
  referenceCode!: string;

  @IsString()
  @IsOptional()
  description?: string;
}