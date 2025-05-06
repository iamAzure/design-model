export class SoundSystem {
    private isOn: boolean = false;
    private volume: number = 30;
    private mode: 'stereo' | 'surround' = 'stereo';

    public turnOn(): void {
        this.isOn = true;
        console.log('音响系统已开启');
    }

    public turnOff(): void {
        this.isOn = false;
        console.log('音响系统已关闭');
    }

    public setVolume(level: number): void {
        if (level >= 0 && level <= 100) {
            this.volume = level;
            console.log(`音量设置为 ${level}%`);
        }
    }

    public setMode(mode: 'stereo' | 'surround'): void {
        this.mode = mode;
        console.log(`音响模式设置为 ${mode}`);
    }

    public getStatus(): string {
        return `音响系统状态: ${this.isOn ? '开启' : '关闭'}, 音量: ${this.volume}%, 模式: ${this.mode}`;
    }
} 