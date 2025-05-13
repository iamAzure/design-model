import { FileVisitor } from './FileVisitor';
import { TextFile } from './TextFile';
import { ImageFile } from './ImageFile';
import { Directory } from './Directory';

export class FileInfoVisitor implements FileVisitor {
    visitTextFile(file: TextFile): void {
        console.log(`文本文件: ${file.name}, 内容: ${file.content}`);
    }
    visitImageFile(file: ImageFile): void {
        console.log(`图片文件: ${file.name}, 尺寸: ${file.width}x${file.height}, 格式: ${file.format}`);
    }
    visitDirectory(directory: Directory): void {
        console.log(`目录: ${directory.name}, 子项数: ${directory.getChildren().length}`);
    }
} 