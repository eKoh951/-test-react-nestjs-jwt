import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './guards/auth-guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/public')
  getPublic(): string {
    return 'This is public';
  }

  @UseGuards(AuthGuard)
  @Get('/private')
  getPriv(): string {
    return 'This is private';
  }
}
