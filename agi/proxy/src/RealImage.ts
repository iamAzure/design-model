import { IImage } from './IImage';

// 真实图片类
export class RealImage implements IImage {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadFromDisk();
    }

    // 从磁盘加载图片
    private loadFromDisk(): void {
        console.log(`加载图片: ${this.fileName}`);
    }

    // 显示图片
    public display(): void {
        console.log(`显示图片: ${this.fileName}`);
    }

    // 获取文件名
    public getFileName(): string {
        return this.fileName;
    }
} 