import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function swaggerConfiguration(app: INestApplication<any>) {
  const config = new DocumentBuilder()
    .setTitle('Designli Test')
    .setDescription('The designli API description')
    .setVersion('1.0')
    .addTag('designli')
    .build();
  return SwaggerModule.createDocument(app, config);
}
