import { StateGraph, Annotation, START, END } from '@langchain/langgraph';

const inputStateAnnotation = Annotation.Root({
  inputA: Annotation<string>(),
});
const outputStateAnnotation = Annotation.Root({
  outputA: Annotation<string>(),
});

const graphBuilder = new StateGraph({
  input: inputStateAnnotation,
  output: outputStateAnnotation,
});

const Node1Action = (state: typeof inputStateAnnotation.State) => {
  return {
    input3: 'input3 from node1', // 修改 node3 的节点状态
  };
};

const Node2Action = (state: typeof inputStateAnnotation.State) => {
  return {};
};

const node3InputStateAnnotation = Annotation.Root({
  ...inputStateAnnotation.spec, // 继承以访问 inputA 状态
  input3: Annotation<string>(),
});
const Node3Action = (state: typeof node3InputStateAnnotation.State) => {
  console.log('node3 run:', state);
  return {
    outputA: state.inputA + '{3}' + state.input3,
  };
};

(async () => {
  const graph = await graphBuilder
    .addNode('node1', Node1Action)
    .addNode('node2', Node2Action)
    .addNode('node3', Node3Action, { input: node3InputStateAnnotation })
    .addEdge(START, 'node1')
    .addEdge('node1', 'node2')
    .addEdge('node2', 'node3')
    .addEdge('node3', END)
    .compile();

  // console.log('mermaid:', (await graph.getGraphAsync()).drawMermaid());

  const result = await graph.invoke({ inputA: 'a' });

  console.log('result:', result);
})();
