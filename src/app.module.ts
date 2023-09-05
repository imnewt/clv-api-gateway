import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';

import { GatewayModule } from '@gateway/gateway.module';
import { AuthGuard } from '@shared/guards/auth.guard';
import { jwtConfig } from '@shared/configs/jwtConfig';

@Module({
  imports: [JwtModule.register(jwtConfig), GatewayModule],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
