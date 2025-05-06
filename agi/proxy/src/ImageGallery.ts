import { IImage } from './IImage';
import { ImageProxy } from './ImageProxy';

// 图片画廊 - 客户端
export class ImageGallery {
    private images: IImage[] = [];

    // 添加图片
    public addImage(fileName: string): void {
        this.images.push(new ImageProxy(fileName));
    }

    // 显示所有图片
    public displayAll(): void {
        console.log('\n显示所有图片:');
        this.images.forEach(image => {
            image.display();
        });
    }

    // 显示指定图片
    public displayImage(fileName: string): void {
        const image = this.images.find(img => img.getFileName() === fileName);
        if (image) {
            console.log(`\n显示指定图片: ${fileName}`);
            image.display();
        } else {
            console.log(`\n图片不存在: ${fileName}`);
        }
    }

    // 获取缓存中的图片数量
    public getCacheSize(): number {
        return ImageProxy.getCacheSize();
    }
} 