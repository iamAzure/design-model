import { Chair, Sofa, FurnitureFactory } from "./interfaces";

// 具体产品 - 复古椅子
class VintageChair implements Chair {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): string {
        return "坐在复古风格的椅子上";
    }
}

// 具体产品 - 复古沙发
class VintageSofa implements Sofa {
    hasLegs(): boolean {
        return true;
    }

    lieOn(): string {
        return "躺在复古风格的沙发上";
    }
}

// 具体工厂 - 复古家具工厂
export class VintageFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VintageChair();
    }

    createSofa(): Sofa {
        return new VintageSofa();
    }
} 