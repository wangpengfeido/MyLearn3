import { StateGraph, Annotation, START, END, Send } from '@langchain/langgraph';

const stateAnnotation = Annotation.Root({
  list: Annotation<string[]>(),
  outputSplittedList: Annotation<Record<string, string[]>>({
    default: () => ({}),
    reducer: (value, update) => {
      return {
        ...value,
        ...update,
      };
    },
  }),
});

const graphBuilder = new StateGraph(stateAnnotation);

const splitNodeAction = (state: string) => {
  return {
    outputSplittedList: {
      [state]: state.split(''),
    },
  };
};

(async () => {
  const graph = await graphBuilder
    .addNode('loopNode', (state) => state)
    .addNode('splitNode', splitNodeAction)
    .addEdge(START, 'loopNode')
    .addConditionalEdges('loopNode', (state) => {
      const notSplitString = state.list.find((item) => !state.outputSplittedList[item]);
      if (notSplitString) {
        return new Send('splitNode', notSplitString);
      } else {
        return END;
      }
    })
    .addEdge('splitNode', 'loopNode')
    .compile();

  console.log('mermaid:', (await graph.getGraphAsync()).drawMermaid());

  const result = await graph.invoke({ list: ['abc', 'def'] });

  console.log('result:', result);
})();
