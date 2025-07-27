import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  LocalPort,
  ContainnerDev_YmMicroNames,
  ContainnerProd_YmMicroNames,
} from '@app/common/config';

const serverNames: string[] =
  process.env.NODE_ENV === 'production'
    ? (ContainnerProd_YmMicroNames ?? [])
    : (ContainnerDev_YmMicroNames ?? []);

console.log(serverNames.join(' '));
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(LocalPort.YmMicro));
}

bootstrap();
