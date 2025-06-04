import { ChatMistralAI } from '@langchain/mistralai';
import { MISTRAL_API_KEY } from '../common/api_key';
import {
  AIMessage,
  filterMessages,
  HumanMessage,
  mergeMessageRuns,
  SystemMessage,
  trimMessages,
} from '@langchain/core/messages';

export class MyAI {
  private model: ChatMistralAI;

  constructor() {
    this.model = new ChatMistralAI({
      model: 'open-mistral-7b',
      temperature: 0,
      apiKey: MISTRAL_API_KEY,
    });
  }

  /** 裁剪 */
  async testTrimMessages() {
    const messages = [
      new SystemMessage({
        content: '你是一个 ai 助手, 同时你也是一个 kunkun 的粉丝，你需要以这个身份和你的用户交流',
      }),
      new HumanMessage({ content: '你好' }),
      new AIMessage({ content: '你好，我是你的助手' }),
      new HumanMessage({ content: '我的名字是 ikun' }),
      new AIMessage({ content: '你好 ikun，请问有什么可以帮助你的' }),
      new HumanMessage({
        content:
          '帮我列举出 kunkun 最受欢迎的是首歌 \n 注意： \n 1. 你需要告诉我歌名和时间 \n 2. 你需要用下面的方式 《xxx》- xxx 表示',
      }),
      new AIMessage({
        content:
          '好的，1. 《XXX》- xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xx',
      }),
    ];

    const trimmer = trimMessages({
      maxTokens: 200,
      strategy: 'last',
      tokenCounter: new ChatMistralAI({
        apiKey: MISTRAL_API_KEY,
        model: 'open-mistral-7b',
      }),
      // // 可以自定义 token counter
      // tokenCounter: (messages) => {
      //   return messages?.reduce((sum, item) => {
      //     const currentLength = (item?.content as string)?.split(' ')?.length;
      //     return sum + (currentLength || 0);
      //   }, 0);
      // },
      // // 可以自定义 text splitter
      // textSplitter: (message: string) => {
      //   return message?.split('《');
      // },
    });

    const trimResult = await trimmer.invoke(messages);

    return trimResult.map((item) => ({ role: item?.lc_id[2], content: item?.lc_kwargs.content }));
  }

  /** 过滤 */
  async testFilterMessages() {
    const messages = [
      new SystemMessage({
        name: 'kun',
        content: '你是一个 ai 助手, 同时你也是一个 kunkun 的粉丝，你需要以这个身份和你的用户交流',
      }),
      new HumanMessage({ content: '你好' }),
      new AIMessage({ content: '你好，我是你的助手' }),
      new HumanMessage({ content: '我的名字是 ikun' }),
      new AIMessage({ content: '你好 ikun，请问有什么可以帮助你的' }),
      new HumanMessage({
        name: 'kun',
        content:
          '帮我列举出 kunkun 最受欢迎的是首歌 \n 注意： \n 1. 你需要告诉我歌名和时间 \n 2. 你需要用下面的方式 《xxx》- xxx 表示',
      }),
      new AIMessage({
        content:
          '好的，1. 《XXX》- xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xx',
      }),
    ];

    const filter = filterMessages({
      includeNames: ['kun'],
    });

    const result = await filter.invoke(messages);

    return result.map((item) => ({
      role: item?.lc_id[2],
      content: item?.lc_kwargs.content,
      name: item?.lc_kwargs.name,
    }));
  }

  /** 合并 */
  async testMergeMessages() {
    const messages = [
      new SystemMessage({
        name: 'kun',
        content: '你是一个 ai 助手, 同时你也是一个 kunkun 的粉丝，你需要以这个身份和你的用户交流',
      }),
      new HumanMessage({ content: '你好' }),
      new AIMessage({ content: '你好，我是你的助手' }),
      // 下面两条消息会合并
      new HumanMessage({ content: '你好' }),
      new HumanMessage({ content: '我的名字是 ikun' }),
      new AIMessage({ content: '你好 ikun，请问有什么可以帮助你的' }),
      new HumanMessage({
        name: 'kun',
        content:
          '帮我列举出 kunkun 最受欢迎的是首歌 \n 注意： \n 1. 你需要告诉我歌名和时间 \n 2. 你需要用下面的方式 《xxx》- xxx 表示',
      }),
      new AIMessage({
        content:
          '好的，1. 《XXX》- xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xxx \n 2. 《XXX》 - xx',
      }),
    ];

    const merge = mergeMessageRuns();

    const result = await merge.invoke(messages);

    return result.map((item) => ({
      role: item?.lc_id[2],
      content: item?.lc_kwargs.content,
      name: item?.lc_kwargs.name,
    }));
  }
}

export const myAI = new MyAI();
