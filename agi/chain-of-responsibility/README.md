# 责任链模式 (Chain of Responsibility Pattern) - 请求拦截器示例

## 简介
责任链模式是一种行为型设计模式，它允许多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。

## 示例说明
本示例模拟了一个前端请求/响应拦截器系统，展示如何使用责任链模式来处理 HTTP 请求和响应：

- 请求/响应对象（Request/Response）：包含请求/响应的相关信息
- 处理者接口（Handler）：定义处理请求/响应的接口
- 具体处理者：
  - 认证拦截器（AuthInterceptor）：处理认证相关的请求/响应
  - 日志拦截器（LoggingInterceptor）：记录请求/响应的日志
  - 错误处理拦截器（ErrorInterceptor）：处理请求/响应中的错误
  - 缓存拦截器（CacheInterceptor）：处理请求的缓存

## 项目结构
```
chain-of-responsibility/
├── src/
│   ├── types/
│   │   ├── Request.ts     # 请求类型定义
│   │   └── Response.ts    # 响应类型定义
│   ├── Handler.ts         # 处理者接口
│   ├── AbstractHandler.ts # 抽象处理者类
│   ├── interceptors/
│   │   ├── AuthInterceptor.ts    # 认证拦截器
│   │   ├── LoggingInterceptor.ts # 日志拦截器
│   │   ├── ErrorInterceptor.ts   # 错误处理拦截器
│   │   └── CacheInterceptor.ts   # 缓存拦截器
│   ├── HttpClient.ts      # HTTP 客户端
│   └── index.ts          # 示例代码入口
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
1. 责任链模式将请求的发送者和接收者解耦
2. 可以动态地改变责任链
3. 每个处理者都可以决定是否处理请求，以及是否将请求传递给下一个处理者
4. 责任链模式可以避免请求的发送者和接收者之间的耦合关系 