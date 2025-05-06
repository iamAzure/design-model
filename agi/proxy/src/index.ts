import { ImageGallery } from './ImageGallery';

// 创建图片画廊
const gallery = new ImageGallery();

// 添加图片
console.log('=== 添加图片 ===');
gallery.addImage('image1.jpg');
gallery.addImage('image2.jpg');
gallery.addImage('image3.jpg');

// 显示所有图片
console.log('\n=== 第一次显示所有图片 ===');
gallery.displayAll();

// 显示指定图片（应该从缓存加载）
console.log('\n=== 显示指定图片 ===');
gallery.displayImage('image1.jpg');
gallery.displayImage('image2.jpg');

// 再次显示所有图片（应该全部从缓存加载）
console.log('\n=== 第二次显示所有图片 ===');
gallery.displayAll();

// 显示缓存中的图片数量
console.log(`\n缓存中的图片数量: ${gallery.getCacheSize()}`); 