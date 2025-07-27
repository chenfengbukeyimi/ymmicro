import { Controller, Get } from '@nestjs/common';
import { MicroConfigService } from './micro-config.service';

@Controller()
export class MicroConfigController {
  constructor(private readonly microConfigService: MicroConfigService) {}

  @Get()
  getHello(): string {
    return this.microConfigService.getHello() + 'micro-config';
  }
}
