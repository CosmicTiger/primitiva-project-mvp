import { Module } from '@nestjs/common';
import { PrimitivaSmartContractsHandlerController } from './primitiva-smart-contracts-handler.controller';
import { PrimitivaSmartContractsHandlerService } from './primitiva-smart-contracts-handler.service';

@Module({
  imports: [],
  controllers: [PrimitivaSmartContractsHandlerController],
  providers: [PrimitivaSmartContractsHandlerService],
})
export class PrimitivaSmartContractsHandlerModule {}
