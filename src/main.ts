import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeSwagger } from './plugins/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  initializeSwagger(app);
  app.enableCors();
  await app.listen(8888);
}
bootstrap();
