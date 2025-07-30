import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import {
  ApiExceptionFilter,
  ResponseInterceptor,
} from '@app/common/response/index';
import { LocalApps, AppImageNames } from '@app/common/config/index';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const micro = app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 7401,
    },
  });

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new ApiExceptionFilter());

  micro.listen();
  app.listen(Number(LocalApps['ymmicro']));
}

bootstrap();

console.info(
  `开发完成后,可使用 Docker 构建镜像命令: docker compose up --build ${AppImageNames.join(' ')}`,
);
