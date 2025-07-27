import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroUserService {
  getHello(): string {
    return 'Hello World!';
  }
}
