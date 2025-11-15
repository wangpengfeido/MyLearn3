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
    .addNode('splitNode', splitNodeAction)
    .addConditionalEdges(
      START,
      (state) => {
        return state.list.map((item) => new Send('splitNode', item));
      },
      ['splitNode']
    )
    .addEdge('splitNode', END)
    .compile();

  console.log('mermaid:', (await graph.getGraphAsync()).drawMermaid());

  const result = await graph.invoke({ list: ['abc', 'def'] });

  console.log('result:', result);
})();
