# LangChain

<https://www.langchain.com/>

## 概念

### 组成

- 框架本身
  - LangChain
  - LangGraph
- LangSmith - 在线 debug 平台
- LangGraph Cloud - 部署服务

### 模型分类

- Chat Model
  - 一系列消息作为输入，一系列消息作为输出。（不一定是纯文本）
  - 列表：<https://js.langchain.com/docs/integrations/chat/>
- LLM
  - 指纯文本模型。没有上下文能力（可自己实现）。
  - 一般是较旧的模型。用户应该优先使用 Chat Model。
  - 列表：<https://js.langchain.com/docs/integrations/llms/>
- Embedding Model
  - 将文本转成向量，可用于向量存储或 Retrievers。
  - 列表：<https://js.langchain.com/docs/integrations/text_embedding/>

### 一些常用包

- @langchain/core
  - 核心依赖
- langchain
  - 基于 @langchain/core 的上层封装
- @langchain/community
  - 社区维护的三方能力的集成。如通义大模型。
- @langchain/xxx
  - 一些流行的包会单独抽离出来，不放在 @langchain/community 下面。例如 @langchain/openai、@langchain/mistralai 。
- @langchain/langgraph
- langsmith

### 消息

#### 类型

常用消息类型：<https://github.com/langchain-ai/langchainjs/tree/main/langchain-core/src/messages>

还有一种特殊的消息类型 placeholder。

#### parser

解析 AI Message。

output parsers：<https://github.com/langchain-ai/langchainjs/tree/main/langchain-core/src/output_parsers>

### LangChain Expression Language (LCEL)

<https://js.langchain.com/docs/concepts/lcel/>

基于 Runnable 实现的“链”，基于 Runnable 创建一个新的 Runnable。

Runnable 实现了 RunnableInterface。Runnable 有下面常用的方法：

- pipe:：chain 两个 Runnable。
- invoke：执行并给出结果。
- stream：流式响应。
- batch：批量执行。
