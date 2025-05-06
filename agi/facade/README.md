# 外观模式 (Facade Pattern) 示例

## 简介
外观模式是一种结构型设计模式，它为复杂的子系统提供一个简单的接口。这种模式通过创建一个外观类，将子系统的复杂性隐藏起来，为客户端提供一个简单的接口。

## 示例说明
本示例模拟了一个家庭影院系统，包含以下组件：
- 投影仪 (Projector)
- 音响系统 (SoundSystem)
- 灯光系统 (LightingSystem)
- 屏幕 (Screen)

通过外观模式，我们创建了一个 `HomeTheaterFacade` 类来统一管理这些子系统，使得用户可以通过简单的接口来控制整个家庭影院系统。

## 项目结构
```
facade-pattern/
├── src/
│   ├── subsystems/
│   │   ├── Projector.ts
│   │   ├── SoundSystem.ts
│   │   ├── LightingSystem.ts
│   │   └── Screen.ts
│   ├── HomeTheaterFacade.ts
│   └── index.ts
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
1. 外观模式提供了一个统一的接口，用来访问子系统中的一群接口
2. 外观定义了一个高层接口，让子系统更容易使用
3. 外观模式将客户端与子系统解耦，降低了系统的耦合度 