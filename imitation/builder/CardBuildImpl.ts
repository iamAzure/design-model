import { CarBuilder } from "./CarBuilder";

export class CarBuilderImpl implements CarBuilder {
  car: Car;
  constructor() {
    this.car = new Car();
  }
  reset(): void {
    this.car = new Car();
  }
  setEngine(engine: string): void {
    this.car.engine = engine;
  }
  setGPS(gps: boolean): void {
    this.car.gps = gps;
  }
  setSeats(seats: number): void {
    this.car.seats = seats;
  }
  getResult(): Car {
    return this.car;
  }
}
