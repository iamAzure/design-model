import { Command } from './Command';
import { AirConditioner } from '../devices/AirConditioner';

// 关空调命令
export class AirConditionerOffCommand implements Command {
    private airConditioner: AirConditioner;

    constructor(airConditioner: AirConditioner) {
        this.airConditioner = airConditioner;
    }

    public execute(): void {
        this.airConditioner.off();
    }

    public undo(): void {
        this.airConditioner.on();
    }
} 