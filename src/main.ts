import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  // {
  //   origin: 'http://127.0.0.1:5173',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  //   allowedHeaders: 'Authorization, Content-Type, Accept',
  // }

  // app.use(
  //   ,
  // );
  // const checkJwt = auth({
  //   issuer: 'asure.us.auth0.com',
  //   audience: 'https://asure.us.auth0.com/api/v2',
  //   secret: 'dawdawdawd, dokpawdad awd ad',
  //   tokenSigningAlg: 'HS256',
  // });

  await app.listen(3000);
}
bootstrap();
