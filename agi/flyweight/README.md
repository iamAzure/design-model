# 享元模式 (Flyweight Pattern)

## 简介
享元模式是一种结构型设计模式，它通过共享对象来减少内存使用，提高性能。该模式主要用于减少创建对象的数量，降低内存占用，提高性能。

## 示例说明
本示例模拟了一个文本编辑器中的字符渲染系统，展示如何使用享元模式来优化内存使用：

- 每个字符（Character）都有其内在状态（如字符值、字体、大小等）
- 字符的位置（x, y坐标）是外在状态
- 通过享元工厂（CharacterFactory）来管理和复用字符对象

## 项目结构
```
flyweight/
├── src/
│   ├── Character.ts        # 字符类（享元）
│   ├── CharacterFactory.ts # 字符工厂（享元工厂）
│   ├── TextEditor.ts       # 文本编辑器（客户端）
│   └── index.ts           # 示例代码入口
└── README.md
```

## 运行示例
```bash
# 安装依赖
npm install

# 运行示例
npm start
```

## 设计模式要点
1. 享元模式通过共享对象来减少内存使用
2. 将对象的状态分为内部状态和外部状态
3. 内部状态可以被共享，外部状态由客户端提供
4. 使用工厂来管理享元对象的创建和复用 