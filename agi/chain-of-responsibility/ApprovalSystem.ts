import { Handler } from "./Handler";
import { TeamLeader } from "./TeamLeader";
import { Manager } from "./Manager";
import { Director } from "./Director";
import { CEO } from "./CEO";
import { LeaveRequest } from "./LeaveRequest";

// 审批系统 - 客户端
export class ApprovalSystem {
  private handler: Handler;

  constructor() {
    // 创建处理者链
    const teamLeader = new TeamLeader();
    const manager = new Manager();
    const director = new Director();
    const ceo = new CEO();

    // 设置责任链
    teamLeader
        .setNext(manager)
        .setNext(director)
        .setNext(ceo);
    this.handler = teamLeader;
  }

  // 提交请假申请
  public submitRequest(days: number, reason: string): void {
    const request = new LeaveRequest(days, reason);
    console.log(`\n提交请假申请：${days} 天，原因：${reason}`);
    this.handler.handle(request);
  }
}
