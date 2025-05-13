import { TextFile } from './TextFile';
import { ImageFile } from './ImageFile';
import { Directory } from './Directory';
import { FileSizeVisitor } from './FileSizeVisitor';
import { FileInfoVisitor } from './FileInfoVisitor';

// 构建文件系统结构
const file1 = new TextFile('readme.txt', 100, '欢迎使用访问者模式');
const file2 = new ImageFile('logo.png', 200, 128, 128, 'png');
const file3 = new TextFile('note.txt', 50, '设计模式很有趣');
const imgDir = new Directory('images');
imgDir.add(file2);
const rootDir = new Directory('root');
rootDir.add(file1);
rootDir.add(file3);
rootDir.add(imgDir);

console.log('=== 文件大小统计 ===');
const sizeVisitor = new FileSizeVisitor();
rootDir.accept(sizeVisitor);
console.log(`总大小: ${sizeVisitor.getTotalSize()} 字节`);

console.log('\n=== 文件信息展示 ===');
const infoVisitor = new FileInfoVisitor();
rootDir.accept(infoVisitor); 