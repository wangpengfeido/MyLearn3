import { HumanMessage } from '@langchain/core/messages';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatMistralAI } from '@langchain/mistralai';
import { MISTRAL_API_KEY } from '../common/api_key';

export class MyAI {
  private model: ChatMistralAI;

  constructor() {
    this.model = new ChatMistralAI({
      model: 'open-mistral-7b',
      temperature: 0,
      apiKey: MISTRAL_API_KEY,
    });
  }

  public async test() {
    const messages = [
      new HumanMessage({ content: 'Translation the following content to Japanese: I am ikun' }),
    ];

    const res = await this.model.invoke(messages);

    console.log('[log] res', JSON.stringify(res));

    const parser = new StringOutputParser();

    const parsedContent = await parser.invoke(res);

    return parsedContent;
  }

  public async testLCEL() {
    const messages = [
      new HumanMessage({ content: 'Translation the following content to Japanese: I am ikun' }),
    ];

    const parser = new StringOutputParser();

    const chain = this.model.pipe(parser);

    const res = await chain.invoke(messages);

    return res;
  }
}

export const myAI = new MyAI();
