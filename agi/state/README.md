# 状态模式 (State Pattern)

## 模式说明

状态模式是一种行为型设计模式，它允许一个对象在其内部状态改变时改变它的行为。对象看起来似乎修改了它的类。

## 实现结构

- `VendingMachineState.ts`: 状态接口，定义了所有状态共有的方法
- `NoMoneyState.ts`: 无钱状态实现
- `HasMoneyState.ts`: 有钱状态实现
- `SoldState.ts`: 售出状态实现
- `VendingMachine.ts`: 自动售货机类，维护当前状态
- `index.ts`: 示例代码

## 运行示例

1. 确保已安装 Node.js 18 版本
2. 使用 pnpm 安装依赖：
   ```bash
   pnpm install
   ```
3. 运行示例代码：
   ```bash
   pnpm ts-node index.ts
   ```

## 示例输出

运行示例代码后，你将看到类似以下的输出：

```
=== 测试场景1：正常购买流程 ===
投入 5 元
选择商品: 可乐
出货: 可乐
找零: 2 元

=== 测试场景2：钱不够 ===
投入 2 元
投入的钱不够

=== 测试场景3：退钱 ===
投入 10 元
退还 10 元

=== 测试场景4：商品不存在 ===
投入 5 元
商品不存在
```

## 模式优点

1. 将状态转换逻辑封装在状态类中，避免了大量的条件判断
2. 遵循开闭原则，易于添加新的状态
3. 状态转换逻辑集中管理，便于维护
4. 消除了庞大的条件分支语句

## 模式缺点

1. 如果状态过多，会导致类的数量增加
2. 状态转换逻辑分散在各个状态类中，可能造成状态转换逻辑的重复
3. 对于简单的状态转换，使用状态模式可能会使代码变得复杂

## 适用场景

1. 对象的行为取决于其状态，并且需要在运行时根据状态改变其行为
2. 代码中包含大量与状态相关的条件语句
3. 需要消除大量的条件分支语句 