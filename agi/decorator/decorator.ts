// 抽象组件 - 咖啡
abstract class Coffee {
    abstract getDescription(): string;
    abstract getCost(): number;
}

// 具体组件 - 浓缩咖啡
class Espresso extends Coffee {
    getDescription(): string {
        return "浓缩咖啡";
    }

    getCost(): number {
        return 20;
    }
}

// 具体组件 - 美式咖啡
class Americano extends Coffee {
    getDescription(): string {
        return "美式咖啡";
    }

    getCost(): number {
        return 25;
    }
}

// 抽象装饰器
abstract class CoffeeDecorator extends Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        super();
        this.coffee = coffee;
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }

    getCost(): number {
        return this.coffee.getCost();
    }
}

// 具体装饰器 - 牛奶
class MilkDecorator extends CoffeeDecorator {
    getDescription(): string {
        return `${this.coffee.getDescription()} + 牛奶`;
    }

    getCost(): number {
        return this.coffee.getCost() + 5;
    }
}

// 具体装饰器 - 糖
class SugarDecorator extends CoffeeDecorator {
    getDescription(): string {
        return `${this.coffee.getDescription()} + 糖`;
    }

    getCost(): number {
        return this.coffee.getCost() + 2;
    }
}

// 具体装饰器 - 焦糖
class CaramelDecorator extends CoffeeDecorator {
    getDescription(): string {
        return `${this.coffee.getDescription()} + 焦糖`;
    }

    getCost(): number {
        return this.coffee.getCost() + 8;
    }
}

// 使用示例
function main() {
    // 创建基础咖啡
    let coffee: Coffee = new Espresso();
    console.log(`${coffee.getDescription()}: ${coffee.getCost()}元`);

    // 添加牛奶
    coffee = new MilkDecorator(coffee);
    console.log(`${coffee.getDescription()}: ${coffee.getCost()}元`);

    // 添加糖
    coffee = new SugarDecorator(coffee);
    console.log(`${coffee.getDescription()}: ${coffee.getCost()}元`);

    // 创建另一杯咖啡
    let coffee2: Coffee = new Americano();
    console.log(`\n${coffee2.getDescription()}: ${coffee2.getCost()}元`);

    // 添加焦糖
    coffee2 = new CaramelDecorator(coffee2);
    console.log(`${coffee2.getDescription()}: ${coffee2.getCost()}元`);

    // 添加牛奶
    coffee2 = new MilkDecorator(coffee2);
    console.log(`${coffee2.getDescription()}: ${coffee2.getCost()}元`);
}

// 运行示例
main(); 