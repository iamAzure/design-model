export class Screen {
    private isDown: boolean = false;

    public lower(): void {
        this.isDown = true;
        console.log('屏幕已降下');
    }

    public raise(): void {
        this.isDown = false;
        console.log('屏幕已升起');
    }

    public getStatus(): string {
        return `屏幕状态: ${this.isDown ? '已降下' : '已升起'}`;
    }
} 