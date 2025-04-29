// 抽象产品 - 椅子
interface Chair {
    hasLegs(): boolean;
    sitOn(): string;
}

// 抽象产品 - 沙发
interface Sofa {
    hasLegs(): boolean;
    lieOn(): string;
}

// 抽象工厂
interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
} 