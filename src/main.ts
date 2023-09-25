import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforma os dados para o formato correto
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  // Configuração do CORS
  app.enableCors(); // Isso permite todas as origens por padrão, mas você pode configurar opções conforme necessário.

  await app.listen(3000);
}

bootstrap();
