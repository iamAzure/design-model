// 客户端代码
class Client {
    private factory: FurnitureFactory;

    constructor(factory: FurnitureFactory) {
        this.factory = factory;
    }

    createFurniture(): void {
        const chair = this.factory.createChair();
        const sofa = this.factory.createSofa();

        console.log(chair.sitOn());
        console.log(sofa.lieOn());
    }
}

// 使用示例
const modernFactory = new ModernFurnitureFactory();
const vintageFactory = new VintageFurnitureFactory();

const modernClient = new Client(modernFactory);
const vintageClient = new Client(vintageFactory);

modernClient.createFurniture();
vintageClient.createFurniture(); 