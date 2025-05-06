export class LightingSystem {
    private isOn: boolean = false;
    private brightness: number = 100;
    private mode: 'normal' | 'dim' | 'movie' = 'normal';

    public turnOn(): void {
        this.isOn = true;
        console.log('灯光系统已开启');
    }

    public turnOff(): void {
        this.isOn = false;
        console.log('灯光系统已关闭');
    }

    public setBrightness(level: number): void {
        if (level >= 0 && level <= 100) {
            this.brightness = level;
            console.log(`灯光亮度设置为 ${level}%`);
        }
    }

    public setMode(mode: 'normal' | 'dim' | 'movie'): void {
        this.mode = mode;
        switch (mode) {
            case 'movie':
                this.brightness = 20;
                break;
            case 'dim':
                this.brightness = 50;
                break;
            default:
                this.brightness = 100;
        }
        console.log(`灯光模式设置为 ${mode}`);
    }

    public getStatus(): string {
        return `灯光系统状态: ${this.isOn ? '开启' : '关闭'}, 亮度: ${this.brightness}%, 模式: ${this.mode}`;
    }
} 