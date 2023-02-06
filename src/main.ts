import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { auth } from 'express-oauth2-jwt-bearer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://127.0.0.1:5173/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
    allowedHeaders: 'Authorization, Content-Type, Accept',
  });
  app.use(
    auth({
      issuer: 'asure.us.auth0.com',
      audience: 'https://asure.us.auth0.com/api/v2',
      secret: 'dawdawdawd, dokpawdad awd ad',
      tokenSigningAlg: 'HS256',
    }),
  );
  await app.listen(3000);
}
bootstrap();
