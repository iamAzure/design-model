import { Character } from './Character';

// 字符工厂 - 享元工厂
export class CharacterFactory {
    private characters: Map<string, Character> = new Map();

    // 获取字符对象，如果不存在则创建新的
    public getCharacter(char: string, font: string = 'Arial', size: number = 12): Character {
        const key = `${char}-${font}-${size}`;
        
        if (!this.characters.has(key)) {
            console.log(`创建新的字符对象: ${char}`);
            this.characters.set(key, new Character(char, font, size));
        } else {
            console.log(`复用已存在的字符对象: ${char}`);
        }

        return this.characters.get(key)!;
    }

    // 获取已创建的字符对象数量
    public getCharacterCount(): number {
        return this.characters.size;
    }
} 