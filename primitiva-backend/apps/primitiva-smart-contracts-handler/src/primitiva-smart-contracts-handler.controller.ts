import { Controller, Get } from '@nestjs/common';
import { PrimitivaSmartContractsHandlerService } from './primitiva-smart-contracts-handler.service';

@Controller()
export class PrimitivaSmartContractsHandlerController {
  constructor(private readonly primitivaSmartContractsHandlerService: PrimitivaSmartContractsHandlerService) {}

  @Get()
  getHello(): string {
    return this.primitivaSmartContractsHandlerService.getHello();
  }
}
