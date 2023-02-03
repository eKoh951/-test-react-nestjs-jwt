import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PassportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
