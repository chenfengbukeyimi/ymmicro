import { NestFactory } from '@nestjs/core';
import { MicroUserModule } from './micro-user.module';
import { LocalPort } from '@app/common/config';

async function bootstrap() {
  const app = await NestFactory.create(MicroUserModule);
  await app.listen(Number(LocalPort.MicroUser));
}
bootstrap();
