import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import axiosInstance from 'src/configs/axiosConfig';

@Injectable()
export class ValidateRequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    axiosInstance.defaults.headers['Authorization'] = authorization;
    next();
  }
}
