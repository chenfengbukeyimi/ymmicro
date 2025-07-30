import { NestFactory } from '@nestjs/core';
import { MicroConfigModule } from './micro-config.module';
import { LocalApps } from '@app/common/config/index';

async function bootstrap() {
  const app = await NestFactory.create(MicroConfigModule);
  await app.listen(Number(LocalApps['micro-config']));
}
bootstrap();
