import { Test, TestingModule } from '@nestjs/testing';
import { PrimitivaLangchainProcessorController } from './primitiva-langchain-processor.controller';
import { PrimitivaLangchainProcessorService } from './primitiva-langchain-processor.service';

describe('PrimitivaLangchainProcessorController', () => {
  let primitivaLangchainProcessorController: PrimitivaLangchainProcessorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PrimitivaLangchainProcessorController],
      providers: [PrimitivaLangchainProcessorService],
    }).compile();

    primitivaLangchainProcessorController = app.get<PrimitivaLangchainProcessorController>(PrimitivaLangchainProcessorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(primitivaLangchainProcessorController.getHello()).toBe('Hello World!');
    });
  });
});
