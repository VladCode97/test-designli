import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MapperStructureModule } from './mapper-structure/mapper-structure.module';
import { MailParserModule } from './mail-parser/mail-parser.module';

@Module({
  imports: [MapperStructureModule, MailParserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
