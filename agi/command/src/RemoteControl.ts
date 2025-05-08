import { Command } from './commands/Command';

// 遥控器类
export class RemoteControl {
    private onCommands: Command[] = [];
    private offCommands: Command[] = [];
    private undoCommand: Command | null = null;

    // 设置命令
    public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    // 按下开按钮
    public onButtonPressed(slot: number): void {
        if (this.onCommands[slot]) {
            this.onCommands[slot].execute();
            this.undoCommand = this.onCommands[slot];
        }
    }

    // 按下关按钮
    public offButtonPressed(slot: number): void {
        if (this.offCommands[slot]) {
            this.offCommands[slot].execute();
            this.undoCommand = this.offCommands[slot];
        }
    }

    // 撤销按钮
    public undoButtonPressed(): void {
        if (this.undoCommand) {
            this.undoCommand.undo();
            this.undoCommand = null;
        }
    }
} 