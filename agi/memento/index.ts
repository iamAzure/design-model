// 备忘录类 - 存储编辑器的状态（Memento）
class EditorMemento {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}

// 原发器类 - 文本编辑器（Originator）
class TextEditor {
    private content: string = '';

    public setContent(content: string): void {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }

    // 创建备忘录
    public createMemento(): EditorMemento {
        return new EditorMemento(this.content);
    }

    // 从备忘录恢复
    public restore(memento: EditorMemento): void {
        this.content = memento.getContent();
    }
}

// 管理者类 - 负责保存和恢复备忘录（Caretaker）
class HistoryManager {
    private mementos: EditorMemento[] = [];
    private currentIndex: number = -1;

    public save(memento: EditorMemento): void {
        // 如果当前不是最新状态，删除之后的所有状态
        if (this.currentIndex < this.mementos.length - 1) {
            this.mementos = this.mementos.slice(0, this.currentIndex + 1);
        }
        this.mementos.push(memento);
        this.currentIndex = this.mementos.length - 1;
    }

    public undo(): EditorMemento | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.mementos[this.currentIndex];
        }
        return null;
    }

    public redo(): EditorMemento | null {
        if (this.currentIndex < this.mementos.length - 1) {
            this.currentIndex++;
            return this.mementos[this.currentIndex];
        }
        return null;
    }
}

// 使用示例 （Client）
function main() {
    // 创建编辑器和管理者
    const editor = new TextEditor();
    const history = new HistoryManager();

    // 编辑文本并保存状态
    console.log('开始编辑文本...');
    editor.setContent('第一行文本');
    history.save(editor.createMemento());
    console.log('当前内容:', editor.getContent());

    editor.setContent('第一行文本\n第二行文本');
    history.save(editor.createMemento());
    console.log('当前内容:', editor.getContent());

    editor.setContent('第一行文本\n第二行文本\n第三行文本');
    history.save(editor.createMemento());
    console.log('当前内容:', editor.getContent());

    // 撤销操作
    console.log('\n执行撤销操作...');
    const undoMemento = history.undo();
    if (undoMemento) {
        editor.restore(undoMemento);
        console.log('撤销后内容:', editor.getContent());
    }

    // 重做操作
    console.log('\n执行重做操作...');
    const redoMemento = history.redo();
    if (redoMemento) {
        editor.restore(redoMemento);
        console.log('重做后内容:', editor.getContent());
    }
}

// 运行示例
main(); 