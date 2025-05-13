import { FileSystemElement } from "./FileSystemElement";
import { FileVisitor } from "./FileVisitor";

export class Directory implements FileSystemElement {
  private children: FileSystemElement[] = [];
  constructor(public name: string) {}

  add(child: FileSystemElement) {
    this.children.push(child);
  }

  getChildren(): FileSystemElement[] {
    return this.children;
  }

  getSize(): number {
    return this.children.reduce((sum, child) => {
      if (typeof (child as any).size === "number") {
        return sum + (child as any).size;
      } else if (typeof (child as any).getSize === "function") {
        return sum + (child as any).getSize();
      }
      return sum;
    }, 0);
  }

  accept(visitor: FileVisitor): void {
    visitor.visitDirectory(this);
    for (const child of this.children) {
      child.accept(visitor);
    }
  }
}
