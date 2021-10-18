import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


export const initializeSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Ulala Tool API')
    .setDescription('Well..no description.')
    .setVersion('0.1')
    .addTag('ulala')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
};
