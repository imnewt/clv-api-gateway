import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';

import { AppModule } from './app.module';
import { API_GATEWAY_PORT } from '@shared/utilities/constants';
import { CustomExceptionFilter } from '@shared/filters/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new CustomExceptionFilter());
  app.use(cors());
  await app.listen(API_GATEWAY_PORT);
}
bootstrap();
