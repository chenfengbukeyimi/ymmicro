import { Injectable } from '@nestjs/common';

@Injectable()
export class OwnerAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}
