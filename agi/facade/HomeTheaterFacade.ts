import { Projector } from './subsystems/Projector';
import { SoundSystem } from './subsystems/SoundSystem';
import { LightingSystem } from './subsystems/LightingSystem';
import { Screen } from './subsystems/Screen';

export class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private lightingSystem: LightingSystem;
    private screen: Screen;

    constructor() {
        this.projector = new Projector();
        this.soundSystem = new SoundSystem();
        this.lightingSystem = new LightingSystem();
        this.screen = new Screen();
    }

    public watchMovie(): void {
        console.log('准备观看电影...');
        this.screen.lower();
        this.projector.turnOn();
        this.projector.setBrightness(80);
        this.soundSystem.turnOn();
        this.soundSystem.setMode('surround');
        this.soundSystem.setVolume(70);
        this.lightingSystem.turnOn();
        this.lightingSystem.setMode('movie');
        console.log('电影模式已准备就绪！');
    }

    public endMovie(): void {
        console.log('关闭电影模式...');
        this.projector.turnOff();
        this.soundSystem.turnOff();
        this.lightingSystem.turnOff();
        this.screen.raise();
        console.log('所有设备已关闭！');
    }

    public getStatus(): string {
        return `
系统状态:
${this.projector.getStatus()}
${this.soundSystem.getStatus()}
${this.lightingSystem.getStatus()}
${this.screen.getStatus()}
        `;
    }
} 