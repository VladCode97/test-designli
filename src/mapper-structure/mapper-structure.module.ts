import { Module } from '@nestjs/common';
import { MapperStructureService } from './service/MapperStructure.service';
import { MapperStructureController } from './view/MapperStructure.controller';

@Module({
  controllers: [MapperStructureController],
  providers: [MapperStructureService],
})
export class MapperStructureModule {}
