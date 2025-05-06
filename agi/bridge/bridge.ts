// 颜色接口 - 实现部分
interface Color {
    applyColor(): string;
}

// 具体颜色实现
class RedColor implements Color {
    applyColor(): string {
        return "红色";
    }
}

class BlueColor implements Color {
    applyColor(): string {
        return "蓝色";
    }
}

// 形状抽象类 - 抽象部分
abstract class Shape {
    protected color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    abstract draw(): void;
}

// 具体形状实现
class Circle extends Shape {
    draw(): void {
        console.log(`绘制${this.color.applyColor()}的圆形`);
    }
}

class Square extends Shape {
    draw(): void {
        console.log(`绘制${this.color.applyColor()}的正方形`);
    }
}

// 使用示例
function main() {
    // 创建颜色
    const red = new RedColor();
    const blue = new BlueColor();

    // 创建形状
    const redCircle = new Circle(red);
    const blueSquare = new Square(blue);

    // 绘制形状
    redCircle.draw();
    blueSquare.draw();
}

// 运行示例
main(); 