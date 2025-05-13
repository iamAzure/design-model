import { TextFile } from './TextFile';
import { ImageFile } from './ImageFile';
import { Directory } from './Directory';

export interface FileVisitor {
    visitTextFile(file: TextFile): void;
    visitImageFile(file: ImageFile): void;
    visitDirectory(directory: Directory): void;
} 