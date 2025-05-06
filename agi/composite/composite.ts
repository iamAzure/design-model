// 抽象组件
abstract class FileSystemComponent {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract getSize(): number;
    abstract display(indent: string): void;
}

// 叶子节点 - 文件
class FileComponent extends FileSystemComponent {
    private size: number;

    constructor(name: string, size: number) {
        super(name);
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }

    display(indent: string): void {
        console.log(`${indent}文件: ${this.name} (${this.size}KB)`);
    }
}

// 组合节点 - 文件夹
class Folder extends FileSystemComponent {
    private children: FileSystemComponent[] = [];

    constructor(name: string) {
        super(name);
    }

    add(component: FileSystemComponent): void {
        this.children.push(component);
    }

    remove(component: FileSystemComponent): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    getSize(): number {
        return this.children.reduce((total, child) => total + child.getSize(), 0);
    }

    display(indent: string): void {
        console.log(`${indent}文件夹: ${this.name}`);
        this.children.forEach(child => child.display(indent + "  "));
    }
}

// 使用示例
function main() {
    // 创建文件
    const file1 = new FileComponent("文档1.txt", 100);
    const file2 = new FileComponent("文档2.txt", 200);
    const file3 = new FileComponent("图片1.jpg", 500);
    const file4 = new FileComponent("图片2.jpg", 600);

    // 创建文件夹
    const documentsFolder = new Folder("文档");
    const imagesFolder = new Folder("图片");
    const rootFolder = new Folder("根目录");

    // 构建树形结构
    documentsFolder.add(file1);
    documentsFolder.add(file2);
    imagesFolder.add(file3);
    imagesFolder.add(file4);
    rootFolder.add(documentsFolder);
    rootFolder.add(imagesFolder);

    // 显示文件系统结构
    console.log("文件系统结构：");
    rootFolder.display("");

    // 显示总大小
    console.log(`\n总大小: ${rootFolder.getSize()}KB`);
}

// 运行示例
main(); 