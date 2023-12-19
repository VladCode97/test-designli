import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MapperStructureModule } from './mapper-structure/mapper-structure.module';

@Module({
  imports: [MapperStructureModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
