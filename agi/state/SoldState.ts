import { VendingMachineState } from './VendingMachineState';
import { VendingMachine } from './VendingMachine';

export class SoldState implements VendingMachineState {
    constructor(private vendingMachine: VendingMachine) {}

    insertMoney(amount: number): void {
        console.log('请等待商品出货');
    }

    ejectMoney(): void {
        console.log('商品已选择，无法退钱');
    }

    selectProduct(productId: string): void {
        console.log('请等待商品出货');
    }

    dispense(): void {
        const product = this.vendingMachine.getProduct(this.vendingMachine.getSelectedProduct());
        if (!product) {
            console.log('商品不存在');
            return;
        }

        console.log(`出货: ${product.name}`);
        this.vendingMachine.setMoney(this.vendingMachine.getMoney() - product.price);
        this.vendingMachine.setSelectedProduct('');
        
        if (this.vendingMachine.getMoney() > 0) {
            console.log(`找零: ${this.vendingMachine.getMoney()} 元`);
            this.vendingMachine.setMoney(0);
        }
        
        this.vendingMachine.setState(this.vendingMachine.getNoMoneyState());
    }
} 