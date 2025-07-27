import { Module } from '@nestjs/common';
import { MicroLogController } from './micro-log.controller';
import { MicroLogService } from './micro-log.service';

@Module({
  imports: [],
  controllers: [MicroLogController],
  providers: [MicroLogService],
})
export class MicroLogModule {}
