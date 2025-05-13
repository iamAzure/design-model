import { Beverage } from './Beverage';

export class Tea extends Beverage {
    private wantsCondiments: boolean;

    constructor(wantsCondiments: boolean = true) {
        super();
        this.wantsCondiments = wantsCondiments;
    }

    protected brew(): void {
        console.log('用沸水浸泡茶叶');
    }

    protected addCondiments(): void {
        console.log('加入柠檬');
    }

    // 覆盖钩子方法
    protected customerWantsCondiments(): boolean {
        return this.wantsCondiments;
    }
} 