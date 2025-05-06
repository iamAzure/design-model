import { IImage } from './IImage';
import { RealImage } from './RealImage';

// 图片代理类
export class ImageProxy implements IImage {
    private realImage: RealImage | null = null;
    private fileName: string;
    private static imageCache: Map<string, RealImage> = new Map();

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    // 显示图片（延迟加载）
    public display(): void {
        if (this.realImage === null) {
            // 检查缓存
            if (ImageProxy.imageCache.has(this.fileName)) {
                console.log(`从缓存中获取图片: ${this.fileName}`);
                this.realImage = ImageProxy.imageCache.get(this.fileName)!;
            } else {
                console.log(`创建新的图片对象: ${this.fileName}`);
                this.realImage = new RealImage(this.fileName);
                // 存入缓存
                ImageProxy.imageCache.set(this.fileName, this.realImage);
            }
        }
        this.realImage.display();
    }

    // 获取文件名
    public getFileName(): string {
        return this.fileName;
    }

    // 获取缓存中的图片数量
    public static getCacheSize(): number {
        return ImageProxy.imageCache.size;
    }
} 