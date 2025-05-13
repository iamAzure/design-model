# 迭代器模式 (Iterator Pattern)

## 简介

迭代器模式是一种行为型设计模式，它提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露其内部的表示。迭代器模式将遍历元素的责任从集合类中分离出来，使得集合类可以专注于管理元素，而遍历操作则由迭代器来完成。

## 实现说明

本项目实现了两种迭代器模式的应用场景：

### 1. 图遍历迭代器

实现了图的深度优先遍历（DFS）和广度优先遍历（BFS）的迭代器。主要包含以下类：

- `AMWGraph<T>`: 邻接矩阵实现的图数据结构
- `GraphIterator`: 图遍历迭代器的抽象基类
- `DFSGraphIterator`: 深度优先遍历迭代器
- `BFSGraphIterator`: 广度优先遍历迭代器

### 2. 组合模式迭代器

实现了组合模式中的迭代器，用于遍历树形结构。主要包含以下类：

- `Component`: 组合模式中的组件接口
- `Leaf`: 叶子节点
- `Composite`: 组合节点
- `CompositeIterator`: 组合模式迭代器

## 使用示例

### 图遍历迭代器

```typescript
// 创建图实例
const graph = new AMWGraph<string>(10);

// 添加顶点和边
graph.insertVertex('A');
graph.insertVertex('B');
graph.insertEdge(0, 1, 1);

// 使用深度优先遍历
const dfsIterator = new DFSGraphIterator(graph);
while (dfsIterator.hasNext()) {
    console.log(dfsIterator.next());
}

// 使用广度优先遍历
const bfsIterator = new BFSGraphIterator(graph);
while (bfsIterator.hasNext()) {
    console.log(bfsIterator.next());
}
```

### 组合模式迭代器

```typescript
// 创建组合结构
const root = new Composite('root');
const branch1 = new Composite('branch1');
const leaf1 = new Leaf('leaf1');
const leaf2 = new Leaf('leaf2');

root.add(branch1);
branch1.add(leaf1);
branch1.add(leaf2);

// 使用迭代器遍历
const iterator = new CompositeIterator(root);
while (iterator.hasNext()) {
    console.log(iterator.next().getName());
}
```

## 设计要点

1. **单一职责原则**：将遍历操作从集合类中分离出来
2. **开闭原则**：可以轻松添加新的遍历方式而不需要修改现有代码
3. **接口隔离**：迭代器接口简单清晰，只包含必要的方法
4. **封装性**：隐藏了集合的内部实现细节

## 优势

1. 简化了集合的接口
2. 支持多种遍历方式
3. 可以并行遍历同一个集合
4. 延迟遍历（按需获取元素）

## 注意事项

1. 迭代器模式可能会增加系统的复杂性
2. 对于简单的集合，使用迭代器可能显得过度设计
3. 需要注意迭代器在遍历过程中对集合的修改问题 