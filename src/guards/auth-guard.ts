import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }
    request.user = await this.validateToken(request.headers.authorization);
    return true;
  }

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new Error('Invalid token');
    }
    const token = auth.split(' ')[1];
    try {
      const decoded = await jwt.verify(token, process.env.SECRET_KEY);
      return decoded;
    } catch (err) {
      const message = 'Token error: ' + (err.message || err.name);
      throw new Error(message);
    }
  }
}
