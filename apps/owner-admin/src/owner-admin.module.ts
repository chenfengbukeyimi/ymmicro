import { Module } from '@nestjs/common';
import { OwnerAdminController } from './owner-admin.controller';
import { OwnerAdminService } from './owner-admin.service';

@Module({
  imports: [],
  controllers: [OwnerAdminController],
  providers: [OwnerAdminService],
})
export class OwnerAdminModule {}
