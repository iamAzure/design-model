import { Subject } from './Subject';
import { Observer } from './Observer';

export class NewsPublisher implements Subject {
    private observers: Observer[] = [];
    private news: string = '';

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('观察者已经订阅过了');
        }
        console.log('添加了一个新的观察者');
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('观察者不存在');
        }
        this.observers.splice(observerIndex, 1);
        console.log('移除了一个观察者');
    }

    notify(): void {
        console.log('通知所有观察者...');
        for (const observer of this.observers) {
            observer.update(this.news);
        }
    }

    publishNews(news: string): void {
        console.log(`发布新闻: ${news}`);
        this.news = news;
        this.notify();
    }
} 