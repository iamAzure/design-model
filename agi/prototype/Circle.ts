import { Shape } from './Shape';

export class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public clone(): Circle {
        return new Circle(this.radius);
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }
} 