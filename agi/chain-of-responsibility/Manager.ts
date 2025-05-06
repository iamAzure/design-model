import { AbstractHandler } from './AbstractHandler';
import { LeaveRequest } from './LeaveRequest';

// 经理处理者
export class Manager extends AbstractHandler {
    public handle(request: LeaveRequest): void {
        if (request.getDays() <= 7) {
            console.log(`经理审批通过：${request.getDays()} 天假期，原因：${request.getReason()}`);
        } else {
            console.log('经理无权审批，转交给上级处理');
            super.handle(request);
        }
    }
} 