import { Controller, Get } from '@nestjs/common';
import { OwnerAdminService } from './owner-admin.service';

@Controller()
export class OwnerAdminController {
  constructor(private readonly ownerAdminService: OwnerAdminService) {}

  @Get()
  getHello(): string {
    return this.ownerAdminService.getHello() + 'owner-admin';
  }
}
