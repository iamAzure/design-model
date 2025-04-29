// 具体生成器：通用汽车建造者
class CarBuilderImpl implements CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    reset(): void {
        this.car = new Car();
    }

    setEngine(engine: string): void {
        this.car.engine = engine;
    }

    setSeats(seats: number): void {
        this.car.seats = seats;
    }

    setGPS(gps: boolean): void {
        this.car.gps = gps;
    }

    getResult(): Car {
        return this.car;
    }
} 