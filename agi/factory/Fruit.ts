// 抽象产品：水果
export interface Fruit {
    getName(): string;
}

// 具体产品：苹果
export class Apple implements Fruit {
    getName(): string {
        return "苹果";
    }
}

// 具体产品：香蕉
export class Banana implements Fruit {
    getName(): string {
        return "香蕉";
    }
} 