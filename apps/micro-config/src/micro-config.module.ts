import { Module } from '@nestjs/common';
import { MicroConfigController } from './micro-config.controller';
import { MicroConfigService } from './micro-config.service';

@Module({
  imports: [],
  controllers: [MicroConfigController],
  providers: [MicroConfigService],
})
export class MicroConfigModule {}
