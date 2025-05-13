export interface PaymentStrategy {
    pay(amount: number): void;
    getStrategyName(): string;
} 