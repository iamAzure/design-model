import { FruitFactory } from "./FruitFactory";

// 客户端代码
const apple = FruitFactory.createFruit("apple");
console.log(apple.getName()); // 输出: 苹果

const banana = FruitFactory.createFruit("banana");
console.log(banana.getName()); // 输出: 香蕉 