import { Observer } from './Observer';

export class NewsSubscriber implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(news: string): void {
        console.log(`${this.name} 收到新闻: ${news}`);
    }
} 