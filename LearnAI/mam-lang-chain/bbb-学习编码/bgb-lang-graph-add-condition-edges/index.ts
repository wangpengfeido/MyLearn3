import { StateGraph, Annotation, START, END } from '@langchain/langgraph';

const stateAnnotation = Annotation.Root({
  value: Annotation<number>({
    default: () => 0,
    reducer: (value, update) => update,
  }),
});

const graphBuilder = new StateGraph(stateAnnotation);

const node1Action = (state: typeof stateAnnotation.State) => {
  console.log('run node1');
  return state;
};

(async () => {
  const graph = await graphBuilder
    .addNode('node1', node1Action)
    .addConditionalEdges(START, (state) => {
      if (state.value >= 0) {
        return 'node1';
      }
      return END;
    })
    .addEdge('node1', END)
    .compile();

  console.log('mermaid:', (await graph.getGraphAsync()).drawMermaid());

  const result = await graph.invoke({ value: 1 });
  // const result = await graph.invoke({ value: -1 });

  console.log('result:', result);
})();
