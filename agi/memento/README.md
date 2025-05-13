# 备忘录模式 (Memento Pattern)

## 简介

备忘录模式是一种行为型设计模式，它允许在不暴露对象实现细节的情况下保存和恢复对象的之前状态。该模式将对象的状态封装在备忘录对象中，并在需要时恢复对象的状态。

## 核心组件

备忘录模式包含三个主要角色：

1. **原发器（Originator）**
   - 负责创建备忘录对象，用来记录当前时刻的内部状态
   - 可以使用备忘录对象恢复内部状态
   - 在本例中由 `TextEditor` 类实现

2. **备忘录（Memento）**
   - 负责存储原发器的内部状态
   - 只提供获取状态的方法，不提供修改方法
   - 在本例中由 `EditorMemento` 类实现

3. **负责人（Caretaker）**
   - 负责保存备忘录对象
   - 不检查或操作备忘录的内容
   - 在本例中由 `HistoryManager` 类实现

## 实现说明

### 1. 备忘录类 (EditorMemento)
```typescript
class EditorMemento {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}
```

### 2. 原发器类 (TextEditor)
```typescript
class TextEditor {
    private content: string = '';

    public createMemento(): EditorMemento {
        return new EditorMemento(this.content);
    }

    public restore(memento: EditorMemento): void {
        this.content = memento.getContent();
    }
}
```

### 3. 负责人类 (HistoryManager)
```typescript
class HistoryManager {
    private mementos: EditorMemento[] = [];
    private currentIndex: number = -1;

    public save(memento: EditorMemento): void {
        // 保存备忘录
    }

    public undo(): EditorMemento | null {
        // 撤销操作
    }

    public redo(): EditorMemento | null {
        // 重做操作
    }
}
```

## 使用示例

```typescript
// 创建编辑器和管理者
const editor = new TextEditor();
const history = new HistoryManager();

// 编辑文本并保存状态
editor.setContent('第一行文本');
history.save(editor.createMemento());

// 撤销操作
const undoMemento = history.undo();
if (undoMemento) {
    editor.restore(undoMemento);
}

// 重做操作
const redoMemento = history.redo();
if (redoMemento) {
    editor.restore(redoMemento);
}
```

## 应用场景

1. **文本编辑器**
   - 实现撤销和重做功能
   - 保存编辑历史

2. **游戏存档**
   - 保存游戏状态
   - 实现存档和读档功能

3. **数据库事务**
   - 保存事务状态
   - 实现回滚功能

## 优势

1. **封装性好**
   - 不暴露对象内部状态
   - 保持对象的封装性

2. **简化原发器**
   - 原发器不需要管理状态历史
   - 职责单一，易于维护

3. **支持撤销操作**
   - 可以方便地实现撤销和重做功能
   - 历史记录管理清晰

## 注意事项

1. **内存消耗**
   - 需要存储多个状态副本
   - 可能占用较大内存

2. **状态管理**
   - 需要合理管理历史记录
   - 避免历史记录过多

3. **性能考虑**
   - 状态保存和恢复可能影响性能
   - 需要权衡状态保存的频率 