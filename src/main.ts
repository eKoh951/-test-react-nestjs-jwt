import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { auth } from 'express-oauth2-jwt-bearer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: false,
  });
  app.enableCors();
  app.use(
    auth({
      issuer: 'asure.us.auth0.com',
      audience: 'https://asure.us.auth0.com/api/v2/',
      secret: 'dawdawdawd, dokpawdad awd ad',
    }),
  );
  await app.listen(3000);
}
bootstrap();
