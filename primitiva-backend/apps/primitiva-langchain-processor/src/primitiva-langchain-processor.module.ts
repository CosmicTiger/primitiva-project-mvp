import { Module } from '@nestjs/common';
import { PrimitivaLangchainProcessorController } from './primitiva-langchain-processor.controller';
import { PrimitivaLangchainProcessorService } from './primitiva-langchain-processor.service';

@Module({
  imports: [],
  controllers: [PrimitivaLangchainProcessorController],
  providers: [PrimitivaLangchainProcessorService],
})
export class PrimitivaLangchainProcessorModule {}
