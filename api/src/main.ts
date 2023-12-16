import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './configuration';

async function bootstrap() {
  const PORT = configuration().environment.PORT ?? 4000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();
