import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { auth } from 'express-oauth2-jwt-bearer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://127.0.0.1:5173',
      methods: ['GET'],
      allowedHeaders: ['Authorization', 'Content-Type'],
      maxAge: 86400,
    },
  });
  app.enableCors();
  app.use(
    auth({
      issuer: 'asure.us.auth0.com',
      audience: 'https://asure.us.auth0.com/api/v2/',
      secret: 'dawdawdawd, dokpawdad awd ad',
      tokenSigningAlg: 'RS256',
    }),
  );
  await app.listen(3000);
}
bootstrap();
