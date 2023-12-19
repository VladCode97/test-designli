import { ApiProperty } from '@nestjs/swagger';
import { SESRecordModel } from 'src/mapper-structure/domain/model/RecordModel';
import { TRecordInput } from 'src/mapper-structure/domain/types/SESType';
import { SES_RECORD_DTO_EXAMPLE } from 'src/mapper-structure/utils/mapperJsonInformation.util';

export class SESRecordDTO implements SESRecordModel {
  @ApiProperty({
    example: SES_RECORD_DTO_EXAMPLE,
    description: 'DTO information to send request',
  })
  Records: TRecordInput[];
}
