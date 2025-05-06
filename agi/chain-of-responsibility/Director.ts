import { AbstractHandler } from './AbstractHandler';
import { LeaveRequest } from './LeaveRequest';

// 总监处理者
export class Director extends AbstractHandler {
    public handle(request: LeaveRequest): void {
        if (request.getDays() <= 15) {
            console.log(`总监审批通过：${request.getDays()} 天假期，原因：${request.getReason()}`);
        } else {
            console.log('总监无权审批，转交给上级处理');
            super.handle(request);
        }
    }
} 