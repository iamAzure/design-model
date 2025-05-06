import { CharacterFactory } from './CharacterFactory';
import { Character } from './Character';

// 文本编辑器 - 客户端
export class TextEditor {
    private characterFactory: CharacterFactory;
    private characters: Array<{ char: Character; x: number; y: number }> = [];

    constructor() {
        this.characterFactory = new CharacterFactory();
    }

    // 添加文本到编辑器
    public addText(text: string, x: number, y: number): void {
        for (let i = 0; i < text.length; i++) {
            const char = this.characterFactory.getCharacter(text[i]);
            this.characters.push({ char, x: x + i * 10, y });
        }
    }

    // 渲染所有文本
    public render(): void {
        console.log('\n渲染文本:');
        this.characters.forEach(({ char, x, y }) => {
            char.render(x, y);
        });
    }

    // 获取已创建的字符对象数量
    public getCharacterCount(): number {
        return this.characterFactory.getCharacterCount();
    }
} 