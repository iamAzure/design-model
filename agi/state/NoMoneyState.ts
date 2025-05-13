import { VendingMachineState } from './VendingMachineState';
import { VendingMachine } from './VendingMachine';

export class NoMoneyState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}

    insertMoney(amount: number): void {
        console.log(`投入 ${amount} 元`);
        this.vendingMachine.setMoney(amount);
        this.vendingMachine.setState(this.vendingMachine.getHasMoneyState());
    }

    ejectMoney(): void {
        console.log('没有投入钱，无法退钱');
    }

    selectProduct(productId: string): void {
        console.log('请先投入钱');
    }

    dispense(): void {
        console.log('请先投入钱并选择商品');
    }
} 