// 指挥者
class Director {
    private builder: CarBuilder;

    setBuilder(builder: CarBuilder): void {
        this.builder = builder;
    }

    constructSportsCar(): void {
        this.builder.reset();
        this.builder.setEngine('V8');
        this.builder.setSeats(2);
        this.builder.setGPS(true);
    }

    // 新增：构建SUV的方法
    constructSUV(): void {
        this.builder.reset();
        this.builder.setEngine('V6');
        this.builder.setSeats(7);
        this.builder.setGPS(true);
    }
} 