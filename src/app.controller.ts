import { Controller, Get } from '@nestjs/common';
// import type { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/public')
  getPublic(): string {
    return 'This is public';
  }

  @Get('/private')
  getPriv(): string {
    return 'This is private';
  }
}
