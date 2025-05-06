import { TextEditor } from './TextEditor';

// 创建文本编辑器实例
const editor = new TextEditor();

// 添加一些文本
console.log('=== 添加第一段文本 ===');
editor.addText('Hello', 0, 0);

console.log('\n=== 添加第二段文本 ===');
editor.addText('Hello World', 0, 20);

// 渲染文本
editor.render();

// 显示创建的字符对象数量
console.log(`\n总共创建的字符对象数量: ${editor.getCharacterCount()}`); 