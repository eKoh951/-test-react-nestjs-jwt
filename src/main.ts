import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: '*',
  });

  // {
  //   origin: 'http://127.0.0.1:5173',
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  //   allowedHeaders: 'Authorization, Content-Type, Accept',
  // }

  await app.listen(3000);
}
bootstrap();
