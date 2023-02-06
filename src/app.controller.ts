import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/public')
  getPublic(@Req() req: Request): string {
    console.log(req.auth.token);

    return 'This is public';
  }

  @Get('/private')
  getPriv(): string {
    return 'This is private';
  }
}
