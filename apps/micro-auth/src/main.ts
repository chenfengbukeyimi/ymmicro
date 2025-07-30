import { NestFactory } from '@nestjs/core';
import { MicroAuthModule } from './micro-auth.module';
import { LocalApps } from '@app/common/config/index';

async function bootstrap() {
  const app = await NestFactory.create(MicroAuthModule);
  await app.listen(Number(LocalApps['micro-auth']));
}

bootstrap();
