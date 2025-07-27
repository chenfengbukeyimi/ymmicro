import { NestFactory } from '@nestjs/core';
import { MicroLogModule } from './micro-log.module';
import { LocalPort } from '@app/common/config';

async function bootstrap() {
  const app = await NestFactory.create(MicroLogModule);
  await app.listen(Number(LocalPort.MicroLog));
}
bootstrap();
