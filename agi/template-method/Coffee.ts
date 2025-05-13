import { Beverage } from './Beverage';

export class Coffee extends Beverage {
    private wantsCondiments: boolean;

    constructor(wantsCondiments: boolean = true) {
        super();
        this.wantsCondiments = wantsCondiments;
    }

    protected brew(): void {
        console.log('用沸水冲泡咖啡');
    }

    protected addCondiments(): void {
        console.log('加入糖和牛奶');
    }

    // 覆盖钩子方法
    protected customerWantsCondiments(): boolean {
        return this.wantsCondiments;
    }
} 