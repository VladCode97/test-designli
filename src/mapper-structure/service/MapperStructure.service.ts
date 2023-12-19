import { Injectable } from '@nestjs/common';
import { SESRecordModel } from '../domain/model/RecordModel';
import { transformerInformationSESRecord } from '../utils/transformerInformation.util';
import { TSESOutput } from '../domain/types/SESType';

@Injectable()
export class MapperStructureService {
  mapperInformation(sesRecord: SESRecordModel): TSESOutput {
    return transformerInformationSESRecord(sesRecord);
  }
}
