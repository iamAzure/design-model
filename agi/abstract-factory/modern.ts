// 具体产品 - 现代椅子
class ModernChair implements Chair {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): string {
        return "坐在现代风格的椅子上";
    }
}

// 具体产品 - 现代沙发
class ModernSofa implements Sofa {
    hasLegs(): boolean {
        return true;
    }

    lieOn(): string {
        return "躺在现代风格的沙发上";
    }
}

// 具体工厂 - 现代家具工厂
class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }
} 