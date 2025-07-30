import { NestFactory } from '@nestjs/core';
import { MicroUserModule } from './micro-user.module';
import { LocalApps } from '@app/common/config/index';

async function bootstrap() {
  const app = await NestFactory.create(MicroUserModule);
  await app.listen(Number(LocalApps['micro-user']));
}
bootstrap();
