import { ApprovalSystem } from './ApprovalSystem';

// 创建审批系统
const approvalSystem = new ApprovalSystem();

// 提交不同天数的请假申请
console.log('=== 测试不同天数的请假申请 ===');

// 2天假期 - 组长审批
approvalSystem.submitRequest(2, '家中有事');

// 5天假期 - 经理审批
approvalSystem.submitRequest(5, '年假');

// 10天假期 - 总监审批
approvalSystem.submitRequest(10, '婚假');

// 20天假期 - 总经理审批
approvalSystem.submitRequest(20, '病假');

// 35天假期 - 超出审批范围
approvalSystem.submitRequest(35, '长期病假'); 