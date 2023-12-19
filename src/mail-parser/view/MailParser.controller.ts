import { Controller, Get, Query } from '@nestjs/common';
import { MailParserService } from '../service/MailParser.service';

@Controller('/mailParser')
export class MailParserController {
  constructor(private readonly mailParserService: MailParserService) {}

  @Get()
  recieveMail(@Query('emailPath') emailPath: string): Promise<any> {
    return this.mailParserService.findJson(emailPath);
  }
}
