import { HumanMessage } from '@langchain/core/messages';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatMistralAI } from '@langchain/mistralai';
import { MISTRAL_API_KEY } from '../common/api_key';
import { ConversationStore } from './conversation-store';
import { ChatPromptTemplate } from '@langchain/core/prompts';

export class MyAI {
  private model: ChatMistralAI;

  constructor() {
    this.model = new ChatMistralAI({
      model: 'open-mistral-7b',
      temperature: 0,
      apiKey: MISTRAL_API_KEY,
    });
  }

  async conversation(params: { conversationId: string; message: string }) {
    // 查询会话消息记录
    const history = ConversationStore.getHistory(params.conversationId) || [];

    // prompt template
    const promptTemplate = ChatPromptTemplate.fromMessages([
      ['system', 'You are a copilot, your name is {name}'],
      ['placeholder', '{history}'],
      ['human', '{message}'],
    ]);

    const parser = new StringOutputParser();

    const res = await promptTemplate.pipe(this.model).pipe(parser).invoke({
      // 为 placeholder 提供值
      name: '擎天柱',
      history: history,
      message: params.message,
    });

    // 将消息保存
    ConversationStore.appendMessages(params.conversationId, [
      {
        role: 'human',
        content: params.message,
      },
      {
        role: 'ai',
        content: res,
      },
    ]);

    return res;
  }

  getHistory(conversationId: string) {
    return ConversationStore.getHistory(conversationId);
  }
}

export const myAI = new MyAI();
