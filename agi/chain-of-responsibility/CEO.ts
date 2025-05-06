import { AbstractHandler } from './AbstractHandler';
import { LeaveRequest } from './LeaveRequest';

// 总经理处理者
export class CEO extends AbstractHandler {
    public handle(request: LeaveRequest): void {
        if (request.getDays() <= 30) {
            console.log(`总经理审批通过：${request.getDays()} 天假期，原因：${request.getReason()}`);
        } else {
            console.log('总经理无权审批，请假天数过长');
        }
    }
} 