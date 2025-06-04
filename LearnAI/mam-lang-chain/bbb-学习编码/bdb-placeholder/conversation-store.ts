import { v7 as uuidv7 } from 'uuid';

interface IMessage {
  id: string;
  role: 'human' | 'system' | 'ai';
  content: string;
}

interface IConversation {
  id: string;
  history: IMessage[];
}

const _conversations: IConversation[] = [];

/** 模拟一个对话存储库 */
export class ConversationStore {
  static getHistory(id: string) {
    return _conversations.find((item) => item.id === id)?.history;
  }

  static appendMessages(id: string, messages: Omit<IMessage, 'id'>[]) {
    let conversation = _conversations.find((item) => item.id === id);

    if (!conversation) {
      conversation = {
        id,
        history: [],
      };
      _conversations.push(conversation);
    }

    conversation.history = [
      ...conversation.history,
      ...messages.map((item) => ({
        ...item,
        id: uuidv7(),
      })),
    ];
  }
}
