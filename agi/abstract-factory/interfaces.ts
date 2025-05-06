// 抽象产品 - 椅子
export interface Chair {
    hasLegs(): boolean;
    sitOn(): string;
}

// 抽象产品 - 沙发
export interface Sofa {
    hasLegs(): boolean;
    lieOn(): string;
}

// 抽象工厂
export interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
} 