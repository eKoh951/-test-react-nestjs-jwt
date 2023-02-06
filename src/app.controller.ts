import { Controller, Get } from '@nestjs/common';
// import type { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/public')
  getPublic(): any {
    return {
      message: 'This is public',
    };
  }

  @Get('/private')
  getPriv(): any {
    return {
      message: 'This is private',
    };
  }
}
