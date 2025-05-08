import { Command } from './Command';
import { Light } from '../devices/Light';

// 关灯命令
export class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.off();
    }

    public undo(): void {
        this.light.on();
    }
} 