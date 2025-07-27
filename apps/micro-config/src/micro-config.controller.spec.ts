import { Test, TestingModule } from '@nestjs/testing';
import { MicroConfigController } from './micro-config.controller';
import { MicroConfigService } from './micro-config.service';

describe('MicroConfigController', () => {
  let microConfigController: MicroConfigController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroConfigController],
      providers: [MicroConfigService],
    }).compile();

    microConfigController = app.get<MicroConfigController>(
      MicroConfigController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microConfigController.getHello()).toBe('Hello World!');
    });
  });
});
