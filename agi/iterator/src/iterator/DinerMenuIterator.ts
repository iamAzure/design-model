import { Iterator } from './Iterator';
import { MenuItem } from '../menu/MenuItem';

// 餐厅菜单迭代器
export class DinerMenuIterator implements Iterator<MenuItem> {
    private items: MenuItem[];
    private position: number = 0;

    constructor(items: Map<string, MenuItem>) {
        this.items = Array.from(items.values());
    }

    public next(): MenuItem {
        const menuItem = this.items[this.position];
        this.position = this.position + 1;
        return menuItem;
    }

    public hasNext(): boolean {
        return this.position < this.items.length;
    }

    public remove(): void {
        if (this.position <= 0) {
            throw new Error("必须先调用next()才能调用remove()");
        }
        this.items.splice(this.position - 1, 1);
    }
} 