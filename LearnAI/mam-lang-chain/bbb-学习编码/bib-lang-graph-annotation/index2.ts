import { StateGraph, Annotation, START, END, Send } from '@langchain/langgraph';

const inputStateAnnotation = Annotation.Root({
  inputA: Annotation<string>({
    default: () => 'default',
    value: (value, update) => {
      return value + '======' + update;
    },
  }),
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
    input3: 'input3 from node1',
  };
};

const node2InputStateAnnotation = Annotation.Root({
  // 如果重复声明一个状态，编译时会报错
  inputA: Annotation<string>({
    default: () => 'default',
    value: (value, update) => value + '----------' + update,
  }),
  input2: Annotation<string>(),
});
const Node2Action = (state: typeof node2InputStateAnnotation.State) => {
  return { outputA: state.inputA + '{2}' + state.input2 };
};

const Node3Action = (state: typeof inputStateAnnotation.State) => {
  console.log('node3 run:', state);
  return {};
};

(async () => {
  const graph = await graphBuilder
    .addNode('node1', Node1Action)
    .addNode('node2', Node2Action, { input: node2InputStateAnnotation })
    .addNode('node3', Node3Action)
    .addEdge(START, 'node1')
    .addEdge('node1', 'node2')
    .addEdge('node2', 'node3')
    .addEdge('node3', END)
    .compile();

  // console.log('mermaid:', (await graph.getGraphAsync()).drawMermaid());

  const result = await graph.invoke({ inputA: 'a' });

  console.log('result:', result);
})();
