import { NestFactory } from '@nestjs/core';
import { PrimitivaSmartContractsHandlerModule } from './primitiva-smart-contracts-handler.module';

async function bootstrap() {
  const app = await NestFactory.create(PrimitivaSmartContractsHandlerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
