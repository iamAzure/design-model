export interface VendingMachineState {
    insertMoney(amount: number): void;
    ejectMoney(): void;
    selectProduct(productId: string): void;
    dispense(): void;
} 