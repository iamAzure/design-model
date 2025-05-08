import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Iterator } from '../iterator/Iterator';
import { PancakeHouseMenuIterator } from '../iterator/PancakeHouseMenuIterator';

// 煎饼屋菜单
export class PancakeHouseMenu implements Menu {
    private menuItems: MenuItem[] = [];

    constructor() {
        this.addItem("煎饼", "传统煎饼配枫糖浆", 15, false);
        this.addItem("蓝莓煎饼", "新鲜蓝莓煎饼", 20, true);
        this.addItem("华夫饼", "松脆华夫饼配水果", 25, true);
    }

    public addItem(name: string, description: string, price: number, vegetarian: boolean): void {
        const menuItem = new MenuItem(name, description, price, vegetarian);
        this.menuItems.push(menuItem);
    }

    public createIterator(): Iterator<MenuItem> {
        return new PancakeHouseMenuIterator(this.menuItems);
    }
} 