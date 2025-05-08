 // 灯设备
export class Light {
    private location: string;
    private isOn: boolean = false;

    constructor(location: string) {
        this.location = location;
    }

    public on(): void {
        this.isOn = true;
        console.log(`${this.location} 的灯已打开`);
    }

    public off(): void {
        this.isOn = false;
        console.log(`${this.location} 的灯已关闭`);
    }

    public getStatus(): string {
        return `${this.location} 的灯状态: ${this.isOn ? '开启' : '关闭'}`;
    }
}