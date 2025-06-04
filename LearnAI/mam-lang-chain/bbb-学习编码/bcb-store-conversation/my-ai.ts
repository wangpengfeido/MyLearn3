import { HumanMessage } from '@langchain/core/messages';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatMistralAI } from '@langchain/mistralai';
import { MISTRAL_API_KEY } from '../common/api_key';
import { ConversationStore } from './conversation-store';

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

    // 构造 messages
    const messages = history
      .map(({ role, content }) => ({ role, content }))
      .concat({ role: 'human', content: params.message });

    const parser = new StringOutputParser();

    const res = await this.model.pipe(parser).invoke(messages);

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
