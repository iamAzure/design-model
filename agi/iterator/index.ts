// 文件系统节点类型
enum FileType {
  FILE = 'FILE',
  DIRECTORY = 'DIRECTORY'
}

// 文件系统节点接口
interface FileSystemNode {
  name: string;
  type: FileType;
  size: number;
  children?: FileSystemNode[];
  parent?: FileSystemNode;
}

// 迭代器接口
interface FileSystemIterator {
  hasNext(): boolean;
  next(): FileSystemNode;
  reset(): void;
}

// 文件系统集合接口
interface FileSystemCollection {
  createDepthFirstIterator(): FileSystemIterator;
  createBreadthFirstIterator(): FileSystemIterator;
  addNode(node: FileSystemNode): void;
  removeNode(node: FileSystemNode): void;
  getRoot(): FileSystemNode;
}

// 深度优先遍历迭代器
class DepthFirstIterator implements FileSystemIterator {
  private stack: FileSystemNode[] = [];
  private visited: Set<FileSystemNode> = new Set();

  constructor(root: FileSystemNode) {
    this.stack.push(root);
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }

  next(): FileSystemNode {
    if (!this.hasNext()) {
      throw new Error('No more nodes to iterate');
    }

    const current = this.stack.pop()!;
    this.visited.add(current);

    // 如果是目录，将其子节点按相反顺序压入栈中
    if (current.type === FileType.DIRECTORY && current.children) {
      for (let i = current.children.length - 1; i >= 0; i--) {
        const child = current.children[i];
        if (!this.visited.has(child)) {
          this.stack.push(child);
        }
      }
    }

    return current;
  }

  reset(): void {
    this.stack = [this.stack[0]];
    this.visited.clear();
  }
}

// 广度优先遍历迭代器
class BreadthFirstIterator implements FileSystemIterator {
  private queue: FileSystemNode[] = [];
  private visited: Set<FileSystemNode> = new Set();

  constructor(root: FileSystemNode) {
    this.queue.push(root);
  }

  hasNext(): boolean {
    return this.queue.length > 0;
  }

  next(): FileSystemNode {
    if (!this.hasNext()) {
      throw new Error('No more nodes to iterate');
    }

    const current = this.queue.shift()!;
    this.visited.add(current);

    // 如果是目录，将其子节点加入队列
    if (current.type === FileType.DIRECTORY && current.children) {
      for (const child of current.children) {
        if (!this.visited.has(child)) {
          this.queue.push(child);
        }
      }
    }

    return current;
  }

  reset(): void {
    this.queue = [this.queue[0]];
    this.visited.clear();
  }
}

// 文件系统集合实现
class FileSystemManager implements FileSystemCollection {
  private root: FileSystemNode;

  constructor(root: FileSystemNode) {
    this.root = root;
  }

  createDepthFirstIterator(): FileSystemIterator {
    return new DepthFirstIterator(this.root);
  }

  createBreadthFirstIterator(): FileSystemIterator {
    return new BreadthFirstIterator(this.root);
  }

  addNode(node: FileSystemNode): void {
    if (!node.parent) {
      throw new Error('Node must have a parent');
    }
    if (node.parent.type !== FileType.DIRECTORY) {
      throw new Error('Parent must be a directory');
    }
    if (!node.parent.children) {
      node.parent.children = [];
    }
    node.parent.children.push(node);
  }

  removeNode(node: FileSystemNode): void {
    if (!node.parent || !node.parent.children) {
      throw new Error('Cannot remove root node');
    }
    const index = node.parent.children.indexOf(node);
    if (index > -1) {
      node.parent.children.splice(index, 1);
    }
  }

  getRoot(): FileSystemNode {
    return this.root;
  }
}

// 使用示例
function main() {
  // 创建文件系统结构
  const root: FileSystemNode = {
    name: 'root',
    type: FileType.DIRECTORY,
    size: 0,
    children: []
  };

  const documents: FileSystemNode = {
    name: 'documents',
    type: FileType.DIRECTORY,
    size: 0,
    children: [],
    parent: root
  };

  const downloads: FileSystemNode = {
    name: 'downloads',
    type: FileType.DIRECTORY,
    size: 0,
    children: [],
    parent: root
  };

  const file1: FileSystemNode = {
    name: 'report.txt',
    type: FileType.FILE,
    size: 1024,
    parent: documents
  };

  const file2: FileSystemNode = {
    name: 'image.jpg',
    type: FileType.FILE,
    size: 2048,
    parent: downloads
  };


  // 创建文件系统
  const fileSystem = new FileSystemManager(root);
  fileSystem.addNode(documents);
  fileSystem.addNode(downloads);
  fileSystem.addNode(file1);
  fileSystem.addNode(file2);
  console.log('root=>', root);

  // 使用深度优先遍历
  console.log('深度优先遍历：');
  const depthFirstIterator = fileSystem.createDepthFirstIterator();
  while (depthFirstIterator.hasNext()) {
    const node = depthFirstIterator.next();
    console.log(`${node.type === FileType.DIRECTORY ? '📁' : '📄'} ${node.name} (${node.size} bytes)`);
  }

  // 使用广度优先遍历
  console.log('\n广度优先遍历：');
  const breadthFirstIterator = fileSystem.createBreadthFirstIterator();
  while (breadthFirstIterator.hasNext()) {
    const node = breadthFirstIterator.next();
    console.log(`${node.type === FileType.DIRECTORY ? '📁' : '📄'} ${node.name} (${node.size} bytes)`);
  }
}

// 运行示例
main();
