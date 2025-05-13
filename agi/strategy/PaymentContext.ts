import { PaymentStrategy } from './PaymentStrategy';

export class PaymentContext {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy): void {
        this.strategy = strategy;
    }

    executePayment(amount: number): void {
        console.log(`当前支付方式: ${this.strategy.getStrategyName()}`);
        this.strategy.pay(amount);
    }
} 