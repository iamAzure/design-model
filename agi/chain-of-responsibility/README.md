# 责任链模式 (Chain of Responsibility Pattern)

## 简介
责任链模式是一种行为型设计模式，它允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

## 使用场景
- 需要将请求处理者组织成一条链，并沿着这条链传递请求
- 需要动态地改变责任链
- 需要避免请求的发送者和接收者之间的耦合关系

## 示例说明
本示例模拟了一个请假审批系统，展示如何使用责任链模式来处理不同级别的请假申请：

- 请假请求（LeaveRequest）：包含请假天数和原因
- 处理者接口（Handler）：定义处理请求的接口
- 具体处理者：
  - 组长（TeamLeader）：可以审批 3 天以内的请假
  - 经理（Manager）：可以审批 7 天以内的请假
  - 总监（Director）：可以审批 15 天以内的请假
  - 总经理（CEO）：可以审批 30 天以内的请假

## 项目结构
```
chain-of-responsibility/
├── src/
│   ├── LeaveRequest.ts    # 请假请求类
│   ├── Handler.ts         # 处理者接口
│   ├── TeamLeader.ts      # 组长处理者
│   ├── Manager.ts         # 经理处理者
│   ├── Director.ts        # 总监处理者
│   ├── CEO.ts            # 总经理处理者
│   ├── ApprovalSystem.ts  # 审批系统（客户端）
```

## 设计模式要点
1. 责任链模式将请求的发送者和接收者解耦
2. 可以动态地改变责任链
3. 每个处理者都可以决定是否处理请求，以及是否将请求传递给下一个处理者
4. 责任链模式可以避免请求的发送者和接收者之间的耦合关系 

## 实现步骤
1. 创建请假请求类（LeaveRequest），包含请假天数和原因
2. 创建处理者接口（Handler），定义处理请求的接口
3. 创建具体处理者类（TeamLeader、Manager、Director、CEO），实现处理请求的逻辑
4. 创建审批系统（ApprovalSystem），将处理者组成责任链并提交请假申请