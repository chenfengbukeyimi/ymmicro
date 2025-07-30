import { NestFactory } from '@nestjs/core';
import { OwnerAdminModule } from './owner-admin.module';
import { LocalApps } from '@app/common/config/index';

async function bootstrap() {
  const app = await NestFactory.create(OwnerAdminModule);
  await app.listen(LocalApps['owner-admin']);
}
bootstrap();
