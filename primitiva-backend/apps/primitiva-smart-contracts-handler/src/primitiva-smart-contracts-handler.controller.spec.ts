import { Test, TestingModule } from '@nestjs/testing';
import { PrimitivaSmartContractsHandlerController } from './primitiva-smart-contracts-handler.controller';
import { PrimitivaSmartContractsHandlerService } from './primitiva-smart-contracts-handler.service';

describe('PrimitivaSmartContractsHandlerController', () => {
  let primitivaSmartContractsHandlerController: PrimitivaSmartContractsHandlerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PrimitivaSmartContractsHandlerController],
      providers: [PrimitivaSmartContractsHandlerService],
    }).compile();

    primitivaSmartContractsHandlerController = app.get<PrimitivaSmartContractsHandlerController>(PrimitivaSmartContractsHandlerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(primitivaSmartContractsHandlerController.getHello()).toBe('Hello World!');
    });
  });
});
