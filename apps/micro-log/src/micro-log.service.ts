import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroLogService {
  getHello(): string {
    return 'Hello World!';
  }
}
