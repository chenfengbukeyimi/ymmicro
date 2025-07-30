import { Test, TestingModule } from '@nestjs/testing';
import { OwnerAdminController } from './owner-admin.controller';
import { OwnerAdminService } from './owner-admin.service';

describe('OwnerAdminController', () => {
  let ownerAdminController: OwnerAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OwnerAdminController],
      providers: [OwnerAdminService],
    }).compile();

    ownerAdminController = app.get<OwnerAdminController>(OwnerAdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ownerAdminController.getHello()).toBe('Hello World!');
    });
  });
});
