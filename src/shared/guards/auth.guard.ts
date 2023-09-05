import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

import {
  AUTH_PREFIX,
  ERROR,
  jwtConstants,
  MODULE,
} from '@shared/utilities/constants';
import { BusinessException } from '@shared/exceptions/business.exception';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const isPublic = request.url.split('/')[2] === AUTH_PREFIX;
    if (isPublic) return true;

    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new BusinessException(
        MODULE.GATEWAY,
        [ERROR.UNAUTHORIZED],
        HttpStatus.UNAUTHORIZED,
      );
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch {
      throw new BusinessException(
        MODULE.GATEWAY,
        [ERROR.UNAUTHORIZED],
        HttpStatus.UNAUTHORIZED,
      );
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
