import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: true });
  addSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}

function addSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Events')
    .setDescription('The events API description')
    .setVersion('1.0')
    .addTag('events')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
