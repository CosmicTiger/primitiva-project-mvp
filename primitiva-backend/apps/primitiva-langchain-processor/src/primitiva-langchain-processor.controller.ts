import { Controller, Get } from '@nestjs/common';
import { PrimitivaLangchainProcessorService } from './primitiva-langchain-processor.service';

@Controller()
export class PrimitivaLangchainProcessorController {
  constructor(private readonly primitivaLangchainProcessorService: PrimitivaLangchainProcessorService) {}

  @Get()
  getHello(): string {
    return this.primitivaLangchainProcessorService.getHello();
  }
}
