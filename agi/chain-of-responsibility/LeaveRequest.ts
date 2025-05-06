// 请假请求类
export class LeaveRequest {
    private days: number;
    private reason: string;

    constructor(days: number, reason: string) {
        this.days = days;
        this.reason = reason;
    }

    public getDays(): number {
        return this.days;
    }

    public getReason(): string {
        return this.reason;
    }
} 