import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from 'langchain/chat_models/openai';

@Injectable()
export class PrimitivaLangchainProcessorService {
  async getHelloPrimitivaProcessor(): Promise<string> {
    const llm = new ChatOpenAI();
    return await llm.invoke('Hello, world!');
  }
}
