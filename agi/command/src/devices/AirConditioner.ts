// 空调设备
export class AirConditioner {
    private location: string;
    private isOn: boolean = false;
    private temperature: number = 26;

    constructor(location: string) {
        this.location = location;
    }

    public on(): void {
        this.isOn = true;
        console.log(`${this.location} 的空调已打开`);
    }

    public off(): void {
        this.isOn = false;
        console.log(`${this.location} 的空调已关闭`);
    }

    public setTemperature(temp: number): void {
        this.temperature = temp;
        console.log(`${this.location} 的空调温度设置为 ${temp}°C`);
    }

    public getStatus(): string {
        return `${this.location} 的空调状态: ${this.isOn ? '开启' : '关闭'}, 温度: ${this.temperature}°C`;
    }
} 