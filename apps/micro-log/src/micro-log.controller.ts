import { Controller, Get } from '@nestjs/common';
import { MicroLogService } from './micro-log.service';

@Controller()
export class MicroLogController {
  constructor(private readonly microLogService: MicroLogService) {}

  @Get()
  getHello(): string {
    return this.microLogService.getHello() + 'micro-log';
  }
}
