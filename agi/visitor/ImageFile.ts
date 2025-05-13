import { FileSystemElement } from './FileSystemElement';
import { FileVisitor } from './FileVisitor';

export class ImageFile implements FileSystemElement {
    constructor(
        public name: string,
        public size: number,
        public width: number,
        public height: number,
        public format: string
    ) {}

    accept(visitor: FileVisitor): void {
        visitor.visitImageFile(this);
    }
} 