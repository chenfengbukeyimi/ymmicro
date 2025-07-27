import { Controller, Get } from '@nestjs/common';
import { MicroAuthService } from './micro-auth.service';

@Controller()
export class MicroAuthController {
  constructor(private readonly microAuthService: MicroAuthService) {}

  @Get()
  getHello(): string {
    return this.microAuthService.getHello() + 'micro-auth';
  }
}
