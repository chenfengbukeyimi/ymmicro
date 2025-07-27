import { Test, TestingModule } from '@nestjs/testing';
import { MicroUserController } from './micro-user.controller';
import { MicroUserService } from './micro-user.service';

describe('MicroUserController', () => {
  let microUserController: MicroUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroUserController],
      providers: [MicroUserService],
    }).compile();

    microUserController = app.get<MicroUserController>(MicroUserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microUserController.getHello()).toBe('Hello World!');
    });
  });
});
