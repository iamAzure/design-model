import { VendingMachineState } from "./VendingMachineState";
import { VendingMachine } from "./VendingMachine";

export class HasMoneyState implements VendingMachineState {
  constructor(private vendingMachine: VendingMachine) {}

  insertMoney(amount: number): void {
    console.log(`已经投入了钱，请先选择商品或退钱`);
  }

  ejectMoney(): void {
    console.log(`退还 ${this.vendingMachine.getMoney()} 元`);
    this.vendingMachine.setMoney(0);
    this.vendingMachine.setState(this.vendingMachine.getNoMoneyState());
  }

  selectProduct(productId: string): void {
    const product = this.vendingMachine.getProduct(productId);
    if (!product) {
      console.log("商品不存在");
      return;
    }

    if (this.vendingMachine.getMoney() < product.price) {
      console.log("投入的钱不够");
      return;
    }

    console.log(`选择商品: ${product.name}`);
    this.vendingMachine.setSelectedProduct(productId);
    this.vendingMachine.setState(this.vendingMachine.getSoldState());
  }

  dispense(): void {
    console.log("请先选择商品");
  }
}
