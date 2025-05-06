import { LeaveRequest } from './LeaveRequest';

// 处理者接口
export interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: LeaveRequest): void;
} 