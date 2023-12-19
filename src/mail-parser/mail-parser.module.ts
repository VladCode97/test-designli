import { Module } from '@nestjs/common';
import { MailParserController } from './view/MailParser.controller';
import { MailParserService } from './service/MailParser.service';

@Module({
  controllers: [MailParserController],
  providers: [MailParserService],
})
export class MailParserModule {}
