// 抽象生成器
import { Car } from "./Car";

export interface CarBuilder {
  reset(): void;
  setEngine(engine: string): void;
  setSeats(seats: number): void;
  setGPS(gps: boolean): void;
  getResult(): Car;
}
