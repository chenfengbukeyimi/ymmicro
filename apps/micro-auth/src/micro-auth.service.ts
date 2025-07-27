import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
