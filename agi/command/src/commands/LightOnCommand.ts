import { Command } from './Command';
import { Light } from '../devices/Light';

// 开灯命令
export class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.on();
    }

    public undo(): void {
        this.light.off();
    }
} 