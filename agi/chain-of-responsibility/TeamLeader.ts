import { AbstractHandler } from './AbstractHandler';
import { LeaveRequest } from './LeaveRequest';

// 组长处理者
export class TeamLeader extends AbstractHandler {
    public handle(request: LeaveRequest): void {
        if (request.getDays() <= 3) {
            console.log(`组长审批通过：${request.getDays()} 天假期，原因：${request.getReason()}`);
        } else {
            console.log('组长无权审批，转交给上级处理');
            super.handle(request);
        }
    }
} 