import { Module } from '@nestjs/common';
import { MicroAuthController } from './micro-auth.controller';
import { MicroAuthService } from './micro-auth.service';

@Module({
  imports: [],
  controllers: [MicroAuthController],
  providers: [MicroAuthService],
})
export class MicroAuthModule {}
