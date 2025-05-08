import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Iterator } from '../iterator/Iterator';
import { DinerMenuIterator } from '../iterator/DinerMenuIterator';

// 餐厅菜单
export class DinerMenu implements Menu {
    private menuItems: Map<string, MenuItem> = new Map();

    constructor() {
        this.addItem("汉堡", "牛肉汉堡配薯条", 30, false);
        this.addItem("沙拉", "新鲜蔬菜沙拉", 25, true);
        this.addItem("汤", "今日特制汤", 20, true);
    }

    public addItem(name: string, description: string, price: number, vegetarian: boolean): void {
        const menuItem = new MenuItem(name, description, price, vegetarian);
        this.menuItems.set(name, menuItem);
    }

    public createIterator(): Iterator<MenuItem> {
        return new DinerMenuIterator(this.menuItems);
    }
} 