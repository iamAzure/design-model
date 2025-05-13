import { PaymentStrategy } from './PaymentStrategy';

export class CreditCardStrategy implements PaymentStrategy {
    private cardNumber: string;
    private cvv: string;

    constructor(cardNumber: string, cvv: string) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }

    pay(amount: number): void {
        console.log(`使用信用卡支付 ${amount} 元`);
        console.log(`卡号: ${this.maskCardNumber(this.cardNumber)}`);
        console.log('支付成功！');
    }

    getStrategyName(): string {
        return '信用卡支付';
    }

    private maskCardNumber(cardNumber: string): string {
        return cardNumber.replace(/^(\d{4})\d+(\d{4})$/, '$1 **** **** $2');
    }
} 