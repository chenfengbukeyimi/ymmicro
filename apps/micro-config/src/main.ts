import { NestFactory } from '@nestjs/core';
import { MicroConfigModule } from './micro-config.module';
import { LocalPort } from '@app/common/config';

async function bootstrap() {
  const app = await NestFactory.create(MicroConfigModule);
  await app.listen(Number(LocalPort.MicroConfig));
}
bootstrap();
