import { Body, Controller, Post } from '@nestjs/common';
import { MapperStructureService } from '../service/MapperStructure.service';
import { SESRecordDTO } from '../shared/DTO/sesRecordDTO';

@Controller('/mapperStructure')
export class MapperStructureController {
  constructor(
    private readonly mapperStructureService: MapperStructureService,
  ) {}

  @Post('')
  mapperInformation(@Body() sesRecord: SESRecordDTO) {
    return this.mapperStructureService.mapperInformation(sesRecord);
  }
}
