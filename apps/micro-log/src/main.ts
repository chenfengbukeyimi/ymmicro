import { NestFactory } from '@nestjs/core';
import { MicroLogModule } from './micro-log.module';
import { LocalApps } from '@app/common/config/index';
async function bootstrap() {
  const app = await NestFactory.create(MicroLogModule);
  await app.listen(Number(LocalApps['micro-log']));
}
bootstrap();
