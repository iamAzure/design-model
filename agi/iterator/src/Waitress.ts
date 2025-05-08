import { Menu } from './menu/Menu';
import { MenuItem } from './menu/MenuItem';
import { Iterator } from './iterator/Iterator';

// 服务员类
export class Waitress {
    private menus: Menu[];

    constructor(menus: Menu[]) {
        this.menus = menus;
    }

    public printMenu(): void {
        console.log("=== 菜单 ===");
        for (const menu of this.menus) {
            this.printMenuItems(menu.createIterator());
        }
    }

    private printMenuItems(iterator: Iterator<MenuItem>): void {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            console.log(menuItem.toString());
        }
    }

    public printVegetarianMenu(): void {
        console.log("\n=== 素食菜单 ===");
        for (const menu of this.menus) {
            this.printVegetarianMenuItems(menu.createIterator());
        }
    }

    private printVegetarianMenuItems(iterator: Iterator<MenuItem>): void {
        while (iterator.hasNext()) {
            const menuItem = iterator.next();
            if (menuItem.isVegetarian()) {
                console.log(menuItem.toString());
            }
        }
    }
} 