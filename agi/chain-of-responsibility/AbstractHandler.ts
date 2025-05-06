import { Handler } from './Handler';
import { LeaveRequest } from './LeaveRequest';

// 抽象处理者类
export abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: LeaveRequest): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log('没有更高权限的处理者可以处理该请求');
        }
    }
} 