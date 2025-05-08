import { Iterator } from '../iterator/Iterator';
import { MenuItem } from './MenuItem';

// 菜单接口
export interface Menu {
    createIterator(): Iterator<MenuItem>;
} 