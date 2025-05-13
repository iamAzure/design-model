import { PaymentContext } from './PaymentContext';
import { AlipayStrategy } from './AlipayStrategy';
import { WechatPayStrategy } from './WechatPayStrategy';
import { CreditCardStrategy } from './CreditCardStrategy';

// 创建支付策略
const alipayStrategy = new AlipayStrategy('alipay@example.com');
const wechatPayStrategy = new WechatPayStrategy('wxid_123456');
const creditCardStrategy = new CreditCardStrategy('1234567890123456', '123');

// 创建支付上下文
const paymentContext = new PaymentContext(alipayStrategy);

// 测试场景1：使用支付宝支付
console.log('=== 测试场景1：使用支付宝支付 ===');
paymentContext.executePayment(100);

// 测试场景2：切换到微信支付
console.log('\n=== 测试场景2：切换到微信支付 ===');
paymentContext.setStrategy(wechatPayStrategy);
paymentContext.executePayment(200);

// 测试场景3：切换到信用卡支付
console.log('\n=== 测试场景3：切换到信用卡支付 ===');
paymentContext.setStrategy(creditCardStrategy);
paymentContext.executePayment(300); 