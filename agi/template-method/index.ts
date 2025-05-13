import { Coffee } from './Coffee';
import { Tea } from './Tea';

// 测试场景1：制作加料的咖啡
console.log('=== 测试场景1：制作加料的咖啡 ===');
const coffee = new Coffee(true);
coffee.prepare();

// 测试场景2：制作不加料的咖啡
console.log('\n=== 测试场景2：制作不加料的咖啡 ===');
const blackCoffee = new Coffee(false);
blackCoffee.prepare();

// 测试场景3：制作加料的茶
console.log('\n=== 测试场景3：制作加料的茶 ===');
const tea = new Tea(true);
tea.prepare();

// 测试场景4：制作不加料的茶
console.log('\n=== 测试场景4：制作不加料的茶 ===');
const plainTea = new Tea(false);
plainTea.prepare(); 