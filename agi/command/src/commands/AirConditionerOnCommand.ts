import { Command } from './Command';
import { AirConditioner } from '../devices/AirConditioner';

// 开空调命令
export class AirConditionerOnCommand implements Command {
    private airConditioner: AirConditioner;
    private temperature: number;

    constructor(airConditioner: AirConditioner, temperature: number) {
        this.airConditioner = airConditioner;
        this.temperature = temperature;
    }

    public execute(): void {
        this.airConditioner.on();
        this.airConditioner.setTemperature(this.temperature);
    }

    public undo(): void {
        this.airConditioner.off();
    }
} 