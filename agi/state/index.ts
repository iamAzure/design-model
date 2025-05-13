import { VendingMachine } from './VendingMachine';

// 创建自动售货机
const vendingMachine = new VendingMachine();

// 测试场景1：正常购买流程
console.log('=== 测试场景1：正常购买流程 ===');
vendingMachine.insertMoney(5);  // 投入5元
vendingMachine.selectProduct('A1');  // 选择可乐
vendingMachine.dispense();  // 出货

// 测试场景2：钱不够
console.log('\n=== 测试场景2：钱不够 ===');
vendingMachine.insertMoney(2);  // 投入2元
vendingMachine.selectProduct('B1');  // 选择薯片（需要5元）

// 测试场景3：退钱
console.log('\n=== 测试场景3：退钱 ===');
vendingMachine.insertMoney(10);  // 投入10元
vendingMachine.ejectMoney();  // 退钱

// 测试场景4：商品不存在
console.log('\n=== 测试场景4：商品不存在 ===');
vendingMachine.insertMoney(5);  // 投入5元
vendingMachine.selectProduct('C1');  // 选择不存在的商品 