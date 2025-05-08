# 命令模式 (Command Pattern)

## 简介
命令模式是一种行为型设计模式，它将请求封装为一个对象，从而使你可以用不同的请求对客户进行参数化。命令模式可以将请求的发送者和接收者解耦，并且可以支持请求的排队、记录日志、撤销等操作。

## 示例说明
本示例模拟了一个智能家居控制系统，展示如何使用命令模式来控制不同的家电设备：

- 命令接口（Command）：定义执行命令的接口
- 具体命令：
  - 开灯命令（LightOnCommand）
  - 关灯命令（LightOffCommand）
  - 开空调命令（AirConditionerOnCommand）
  - 关空调命令（AirConditionerOffCommand）
- 接收者：
  - 灯（Light）
  - 空调（AirConditioner）
- 调用者（RemoteControl）：遥控器，用于执行命令

## 项目结构
```
command/
├── src/
│   ├── commands/
│   │   ├── Command.ts              # 命令接口
│   │   ├── LightOnCommand.ts       # 开灯命令
│   │   ├── LightOffCommand.ts      # 关灯命令
│   │   ├── AirConditionerOnCommand.ts  # 开空调命令
│   │   └── AirConditionerOffCommand.ts # 关空调命令
│   ├── devices/
│   │   ├── Light.ts                # 灯设备
│   │   └── AirConditioner.ts       # 空调设备
│   ├── RemoteControl.ts            # 遥控器（调用者）
│   └── index.ts                    # 示例代码入口
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
1. 命令模式将请求封装为一个对象，使你可以用不同的请求对客户进行参数化
2. 命令模式可以将请求的发送者和接收者解耦
3. 命令模式可以支持请求的排队、记录日志、撤销等操作
4. 命令模式可以方便地扩展新的命令 