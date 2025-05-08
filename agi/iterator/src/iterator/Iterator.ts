// 迭代器接口
export interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
    remove(): void;
} 