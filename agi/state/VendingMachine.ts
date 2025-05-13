import { VendingMachineState } from './VendingMachineState';
import { NoMoneyState } from './NoMoneyState';
import { HasMoneyState } from './HasMoneyState';
import { SoldState } from './SoldState';

interface Product {
    id: string;
    name: string;
    price: number;
}

export class VendingMachine {
    private state: VendingMachineState;
    private noMoneyState: VendingMachineState;
    private hasMoneyState: VendingMachineState;
    private soldState: VendingMachineState;
    private money: number = 0;
    private selectedProduct: string = '';
    private products: Map<string, Product> = new Map();

    constructor() {
        this.noMoneyState = new NoMoneyState(this);
        this.hasMoneyState = new HasMoneyState(this);
        this.soldState = new SoldState(this);
        this.state = this.noMoneyState;

        // 初始化商品
        this.products.set('A1', { id: 'A1', name: '可乐', price: 3 });
        this.products.set('A2', { id: 'A2', name: '雪碧', price: 3 });
        this.products.set('B1', { id: 'B1', name: '薯片', price: 5 });
        this.products.set('B2', { id: 'B2', name: '饼干', price: 4 });
    }

    setState(state: VendingMachineState): void {
        this.state = state;
    }

    getNoMoneyState(): VendingMachineState {
        return this.noMoneyState;
    }

    getHasMoneyState(): VendingMachineState {
        return this.hasMoneyState;
    }

    getSoldState(): VendingMachineState {
        return this.soldState;
    }

    setMoney(money: number): void {
        this.money = money;
    }

    getMoney(): number {
        return this.money;
    }

    setSelectedProduct(productId: string): void {
        this.selectedProduct = productId;
    }

    getSelectedProduct(): string {
        return this.selectedProduct;
    }

    getProduct(productId: string): Product | undefined {
        return this.products.get(productId);
    }

    // 对外接口
    insertMoney(amount: number): void {
        this.state.insertMoney(amount);
    }

    ejectMoney(): void {
        this.state.ejectMoney();
    }

    selectProduct(productId: string): void {
        this.state.selectProduct(productId);
    }

    dispense(): void {
        this.state.dispense();
    }
} 