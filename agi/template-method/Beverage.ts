export abstract class Beverage {
    // 模板方法，定义了制作饮料的算法骨架
    public prepare(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
        console.log('饮料制作完成！');
    }

    // 具体方法，所有子类共享的实现
    private boilWater(): void {
        console.log('将水煮沸');
    }

    private pourInCup(): void {
        console.log('将饮料倒入杯中');
    }

    // 抽象方法，必须由子类实现
    protected abstract brew(): void;
    protected abstract addCondiments(): void;

    // 钩子方法，子类可以覆盖以改变算法行为
    protected customerWantsCondiments(): boolean {
        return true;
    }
} 