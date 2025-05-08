// 菜单项类
export class MenuItem {
    private name: string;
    private description: string;
    private price: number;
    private vegetarian: boolean;

    constructor(name: string, description: string, price: number, vegetarian: boolean) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.vegetarian = vegetarian;
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getPrice(): number {
        return this.price;
    }

    public isVegetarian(): boolean {
        return this.vegetarian;
    }

    public toString(): string {
        return `${this.name}, ${this.price}元 -- ${this.description}`;
    }
} 