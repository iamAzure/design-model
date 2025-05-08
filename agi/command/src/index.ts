import { Light } from './devices/Light';
import { AirConditioner } from './devices/AirConditioner';
import { LightOnCommand } from './commands/LightOnCommand';
import { LightOffCommand } from './commands/LightOffCommand';
import { AirConditionerOnCommand } from './commands/AirConditionerOnCommand';
import { AirConditionerOffCommand } from './commands/AirConditionerOffCommand';
import { RemoteControl } from './RemoteControl';

// 创建设备（接受者）
const livingRoomLight = new Light('客厅');
const bedroomLight = new Light('卧室');
const livingRoomAC = new AirConditioner('客厅');

// 创建命令
const livingRoomLightOn = new LightOnCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);
const bedroomLightOn = new LightOnCommand(bedroomLight);
const bedroomLightOff = new LightOffCommand(bedroomLight);
const livingRoomACOn = new AirConditionerOnCommand(livingRoomAC, 25);
const livingRoomACOff = new AirConditionerOffCommand(livingRoomAC);

// 创建遥控器（发送者）
const remote = new RemoteControl();

// 设置命令
remote.setCommand(0, livingRoomLightOn, livingRoomLightOff);    // 客厅灯
remote.setCommand(1, bedroomLightOn, bedroomLightOff);          // 卧室灯
remote.setCommand(2, livingRoomACOn, livingRoomACOff);          // 客厅空调

// 测试遥控器
console.log('=== 测试遥控器 ===');

// 打开客厅灯
console.log('\n打开客厅灯:');
remote.onButtonPressed(0);

// 打开卧室灯
console.log('\n打开卧室灯:');
remote.onButtonPressed(1);

// 打开空调
console.log('\n打开空调:');
remote.onButtonPressed(2);

// 撤销最后一个操作（关闭空调）
console.log('\n撤销最后一个操作:');
remote.undoButtonPressed();

// 关闭客厅灯
console.log('\n关闭客厅灯:');
remote.offButtonPressed(0);

// 关闭卧室灯
console.log('\n关闭卧室灯:');
remote.offButtonPressed(1); 