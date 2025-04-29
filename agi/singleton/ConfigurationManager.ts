export class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config: Map<string, any>;

    private constructor() {
        this.config = new Map<string, any>();
    }

    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    public setConfig(key: string, value: any): void {
        this.config.set(key, value);
        console.log(`配置已更新: ${key} = ${value}`);
    }

    public getConfig(key: string): any {
        return this.config.get(key);
    }

    public getAllConfig(): Map<string, any> {
        return new Map(this.config);
    }
} 