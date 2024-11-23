import { Injectable } from '@nestjs/common';

@Injectable()
export class PrimitivaSmartContractsHandlerService {
  getHello(): string {
    return 'Hello World!';
  }
}
