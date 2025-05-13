import { FileSystemElement } from "./FileSystemElement";
import { FileVisitor } from "./FileVisitor";

export class TextFile implements FileSystemElement {
  constructor(
    public name: string,
    public size: number,
    public content: string
  ) {}

  accept(visitor: FileVisitor): void {
    visitor.visitTextFile(this);
  }
}
