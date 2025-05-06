export class Projector {
    private isOn: boolean = false;
    private brightness: number = 50;

    public turnOn(): void {
        this.isOn = true;
        console.log('投影仪已开启');
    }

    public turnOff(): void {
        this.isOn = false;
        console.log('投影仪已关闭');
    }

    public setBrightness(level: number): void {
        if (level >= 0 && level <= 100) {
            this.brightness = level;
            console.log(`投影仪亮度设置为 ${level}%`);
        }
    }

    public getStatus(): string {
        return `投影仪状态: ${this.isOn ? '开启' : '关闭'}, 亮度: ${this.brightness}%`;
    }
} 