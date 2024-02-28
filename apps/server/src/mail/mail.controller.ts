import { Controller, Get, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  getHello(): string {
    return 'hello mail';
  }

  @Post('subscribe')
  async subscribeToMailingList(@Body('email') email: string) {
    return this.mailService.subscribeToMailingList(email);
  }
}
