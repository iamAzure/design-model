import { HomeTheaterFacade } from './HomeTheaterFacade';

// 创建家庭影院外观实例
const homeTheater = new HomeTheaterFacade();

// 开始观看电影
console.log('=== 开始观看电影 ===');
homeTheater.watchMovie();
console.log(homeTheater.getStatus());

// 结束观看电影
console.log('\n=== 结束观看电影 ===');
homeTheater.endMovie();
console.log(homeTheater.getStatus()); 