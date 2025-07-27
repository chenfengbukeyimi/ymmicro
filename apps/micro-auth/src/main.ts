import { NestFactory } from '@nestjs/core';
import { MicroAuthModule } from './micro-auth.module';
import { LocalPort } from '@app/common/config';

async function bootstrap() {
  const app = await NestFactory.create(MicroAuthModule);
  await app.listen(Number(LocalPort.MicroAuth));
}

bootstrap();
