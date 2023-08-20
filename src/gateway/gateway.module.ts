import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { GatewayController } from './gateway.controller';
import { ValidateRequestMiddleware } from 'src/middlewares/validate-request.middleware';

@Module({
  controllers: [GatewayController],
})
export class GatewayModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateRequestMiddleware).forRoutes('*');
  }
}
