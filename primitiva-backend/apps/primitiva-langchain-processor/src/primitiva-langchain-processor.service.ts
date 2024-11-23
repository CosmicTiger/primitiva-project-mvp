import { Injectable } from '@nestjs/common';

@Injectable()
export class PrimitivaLangchainProcessorService {
  getHello(): string {
    return 'Hello World!';
  }
}
