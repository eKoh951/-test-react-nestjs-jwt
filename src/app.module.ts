import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ValidateAccessToken } from './middlewares/auth.middleware';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PassportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateAccessToken)
      .forRoutes(
        { path: 'public', method: RequestMethod.GET },
        { path: 'private', method: RequestMethod.GET },
      );
  }
}
