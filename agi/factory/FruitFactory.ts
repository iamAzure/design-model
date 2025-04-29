import { Fruit, Apple, Banana } from "./Fruit";

// 工厂类
export class FruitFactory {
    static createFruit(type: string): Fruit {
        if (type === "apple") {
            return new Apple();
        } else if (type === "banana") {
            return new Banana();
        } else {
            throw new Error("未知的水果类型");
        }
    }
} 