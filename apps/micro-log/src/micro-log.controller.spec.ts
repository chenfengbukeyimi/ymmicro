import { Test, TestingModule } from '@nestjs/testing';
import { MicroLogController } from './micro-log.controller';
import { MicroLogService } from './micro-log.service';

describe('MicroLogController', () => {
  let microLogController: MicroLogController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroLogController],
      providers: [MicroLogService],
    }).compile();

    microLogController = app.get<MicroLogController>(MicroLogController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microLogController.getHello()).toBe('Hello World!');
    });
  });
});
