import { NewsPublisher } from './NewsPublisher';
import { NewsSubscriber } from './NewsSubscriber';

// 创建新闻发布者
const newsPublisher = new NewsPublisher();

// 创建新闻订阅者
const subscriber1 = new NewsSubscriber('张三');
const subscriber2 = new NewsSubscriber('李四');
const subscriber3 = new NewsSubscriber('王五');

// 订阅新闻
newsPublisher.attach(subscriber1);
newsPublisher.attach(subscriber2);
newsPublisher.attach(subscriber3);

// 发布新闻
newsPublisher.publishNews('重大新闻：人工智能取得突破性进展！');

// 取消订阅
newsPublisher.detach(subscriber2);

// 再次发布新闻
newsPublisher.publishNews('科技新闻：新型电动汽车发布！'); 