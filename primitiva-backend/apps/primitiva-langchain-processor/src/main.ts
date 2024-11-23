import { NestFactory } from '@nestjs/core';
import { PrimitivaLangchainProcessorModule } from './primitiva-langchain-processor.module';

async function bootstrap() {
  const app = await NestFactory.create(PrimitivaLangchainProcessorModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
