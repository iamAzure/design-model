import { Iterator } from './Iterator';
import { MenuItem } from '../menu/MenuItem';

export class PancakeHouseMenuIterator implements Iterator<MenuItem> {
    private items: MenuItem[];
    private position: number = 0;

    constructor(items: MenuItem[]) {
        this.items = items;
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
            throw new Error("必须先调用 next() 才能调用 remove()");
        }
        this.items.splice(this.position - 1, 1);
        this.position--;
    }
} 