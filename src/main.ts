import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middlewares/functional.middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(logger);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  await app.listen(3000);
}
bootstrap();
