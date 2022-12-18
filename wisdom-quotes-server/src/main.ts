import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from '../domain/App/App.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
