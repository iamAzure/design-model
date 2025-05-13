import { FileVisitor } from './FileVisitor';

export interface FileSystemElement {
    accept(visitor: FileVisitor): void;
} 