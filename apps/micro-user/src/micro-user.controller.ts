import { Controller, Get } from '@nestjs/common';
import { MicroUserService } from './micro-user.service';

@Controller()
export class MicroUserController {
  constructor(private readonly microUserService: MicroUserService) {}

  @Get()
  getHello(): string {
    return this.microUserService.getHello() + 'micro-user';
  }
}
