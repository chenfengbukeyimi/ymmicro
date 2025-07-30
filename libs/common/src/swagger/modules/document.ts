import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface SwaggerConfig {
  title?: string;
  version?: string;
  description?: string;
}

export function setupSwagger(
  app: INestApplication,
  option: SwaggerConfig | null = null,
) {
  const { title = '', version = '1.0.0', description = '' } = option ?? {};
  const config = new DocumentBuilder()
    .setTitle(title)
    .setVersion(version)
    .setDescription(description)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);
}
