import { FileVisitor } from './FileVisitor';
import { TextFile } from './TextFile';
import { ImageFile } from './ImageFile';
import { Directory } from './Directory';

export class FileSizeVisitor implements FileVisitor {
    private totalSize = 0;

    visitTextFile(file: TextFile): void {
        this.totalSize += file.size;
        console.log(`文本文件 ${file.name} 大小: ${file.size} 字节`);
    }
    visitImageFile(file: ImageFile): void {
        this.totalSize += file.size;
        console.log(`图片文件 ${file.name} 大小: ${file.size} 字节`);
    }
    visitDirectory(directory: Directory): void {
        console.log(`目录 ${directory.name} 总大小: ${directory.getSize()} 字节`);
    }
    getTotalSize(): number {
        return this.totalSize;
    }
} 