// 产品：汽车
class Car {
    public engine: string = '';
    public seats: number = 0;
    public gps: boolean = false;

    public show(): void {
        console.log(`引擎: ${this.engine}, 座位: ${this.seats}, GPS: ${this.gps ? '有' : '无'}`);
    }
} 