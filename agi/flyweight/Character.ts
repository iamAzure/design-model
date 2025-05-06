// 字符类 - 享元对象
export class Character {
    private char: string;
    private font: string;
    private size: number;

    constructor(char: string, font: string = 'Arial', size: number = 12) {
        this.char = char;
        this.font = font;
        this.size = size;
    }

    // 渲染字符 - 使用外部状态（位置）
    public render(x: number, y: number): void {
        console.log(`渲染字符 '${this.char}' 在位置 (${x}, ${y})，使用字体 ${this.font}，大小 ${this.size}`);
    }

    // 获取字符的唯一标识
    public getKey(): string {
        return `${this.char}-${this.font}-${this.size}`;
    }
} 