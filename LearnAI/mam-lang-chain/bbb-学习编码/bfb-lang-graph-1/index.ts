import { StateGraph, Annotation, START, END } from '@langchain/langgraph';

// 声明状态
const stateAnnotation = Annotation.Root({
  name: Annotation<string>(),
  maxValue: Annotation<number>({
    default: () => 1,
    reducer: (value, update) => {
      console.log('reducer run:', 'value:', value, 'update:', update);
      return Math.max(value, update);
    },
  }),
});

// 创建一个 graph
const graphBuilder = new StateGraph(stateAnnotation);

// 创建一个节点
const node1Action = (state: typeof stateAnnotation.State) => {
  return {
    maxValue: 100,
  };
};

(async () => {
  const graph = await graphBuilder
    // 将节点添加到 graph。
    .addNode('node1', node1Action)
    // 添加边
    .addEdge(START, 'node1')
    .addEdge('node1', END)
    // 编译
    .compile();

  // console.log('mermaid:', (await graph.getGraphAsync()).drawMermaid());

  // 执行
  const result = await graph.invoke({ name: 'a', maxValue: 0 });

  console.log('result:', result);
})();
