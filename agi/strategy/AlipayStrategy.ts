import { PaymentStrategy } from './PaymentStrategy';

export class AlipayStrategy implements PaymentStrategy {
    private account: string;

    constructor(account: string) {
        this.account = account;
    }

    pay(amount: number): void {
        console.log(`使用支付宝支付 ${amount} 元`);
        console.log(`支付宝账号: ${this.account}`);
        console.log('支付成功！');
    }

    getStrategyName(): string {
        return '支付宝支付';
    }
} 