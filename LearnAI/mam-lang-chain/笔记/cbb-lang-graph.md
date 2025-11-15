# lang graph

## 概念

### 状态

状态通过 Annotation 声明，它是一个二层的树，有一个根状态，状态下有子状态。

状态可以设置默认值，也可以通过`graph.invoke`给状态传入初始值(初始值会相对于默认值做一次 reduce)。

状态可以设置 reducer，指定状态的更新方法。

graph 输入输出可以使用不同的状态，也可以将输入输出状态分开。

#### Channel

每一个状态也是一个 Channel，节点可以通过 channel 读写状态。

#### 状态合并

可以使用 Annotation 的 `spec` 属性，实现状态的继承与合并。

#### 状态忽略

节点中只能读取已声明的状态。

节点只能修改已声明的状态，未声明的状态会被忽略；graph 执行后也只能返回已声明的状态。

#### 节点 input 状态

节点可以声明自己的 input 状态。

一旦声明自己的 input 状态之后，节点 action 就只能拿到本节点已声明的状态。如果要获取其他状态（比如全局 input），需要继承其他状态。

**节点不可声明自己的 output 状态。因为一个状态一旦被声明，就是全局所有的节点都可以修改的。**

#### MessagesAnnotation

langgraph 自带了一个快速创建 message annotation 的类。它仍然是 Annotation，但是约束只有一个名为 message 的 channel，message 的类型为 langChain 中的各种 message 组成的数组。

### 节点

#### 节点 action

节点 action 是一个 Runnable。

node action 函数（Runnable）接收两个参数：

- state 当前全局状态，或 send 发来的状态；
- config （RunnableConfig）全局配置，通过 invoke 传入。

特殊节点：`__start__`和`__end__`

#### 添加节点

通过 addNode 函数将节点添加到 graph 中。它接收三个参数

- 节点名
- 节点 action
- [可选]节点配置
  - 节点私有 input 状态

### 边

连接节点。

#### 条件边

- addConditionalEdges
  - source 开始节点。
  - routingFunction 条件路由函数。
    - 入参与 NODE 相同。
    - 可以返回节点名称。节点名称还可以是一个数组，表示并行执行。
    - 也可以返回一个值，然后使用 pathMap 参数进行节点匹配。
    - Send 数组。
  - pathMap
    - 当不传，source 会有一条默认边连接到`__end__`。
    - 当传一个对象，表示 routingFunction 返回的值匹配节点。
    - 当传一个数组，表示约束可连接到的节点。

#### Send

send 的主要目的就是改变 node 接收的 state，从而实现 node 的复用。

send 在并行与循环中并不是必要的，但它在并行和循环中非常有用。

send 接收两个参数：

- node 路由到哪个节点。
- args 发送到节点的参数。

### 编译

检查边和节点是否正确。

### 执行

invoke 接收两个参数：

- 初始状态
- 全局配置。（RunnableConfig）

#### 配置

configuration 的类型也可以通过 Annotation 声明。

Annotation 声明仅用于类型提示，并不会影响实际传入的值，也不能基于它设置默认值。

### graph 可视化

- getGraphAsync 获取 graph 实例
- drawMermaid
- drawMermaidPng
