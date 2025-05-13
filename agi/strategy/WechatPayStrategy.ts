import { PaymentStrategy } from './PaymentStrategy';

export class WechatPayStrategy implements PaymentStrategy {
    private account: string;

    constructor(account: string) {
        this.account = account;
    }

    pay(amount: number): void {
        console.log(`使用微信支付 ${amount} 元`);
        console.log(`微信账号: ${this.account}`);
        console.log('支付成功！');
    }

    getStrategyName(): string {
        return '微信支付';
    }
} 