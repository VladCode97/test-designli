import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfiguration } from './swagger/swaggerConfiguration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('swagger', app, swaggerConfiguration(app));
  await app.listen(3000);
}
bootstrap();
