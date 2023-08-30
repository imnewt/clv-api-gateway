import { Module } from '@nestjs/common';

import { GatewayController } from './infrastructure/controllers/gateway.controller';

@Module({
  controllers: [GatewayController],
})
export class GatewayModule {}
