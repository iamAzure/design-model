import { DatabaseConnection } from './DatabaseConnection';
import { ConfigurationManager } from './ConfigurationManager';

export class SingletonExample {
    public static run(): void {
        // 数据库连接示例
        console.log('=== 数据库连接示例 ===');
        const db1 = DatabaseConnection.getInstance();
        const db2 = DatabaseConnection.getInstance();

        console.log('db1 和 db2 是同一个实例:', db1 === db2);

        db1.connect('mongodb://localhost:27017');
        console.log('db2 的连接状态:', db2.isDatabaseConnected());
        console.log('db2 的连接字符串:', db2.getConnectionString());

        db1.disconnect();
        console.log('db2 的连接状态:', db2.isDatabaseConnected());

        // 配置管理器示例
        console.log('\n=== 配置管理器示例 ===');
        const config1 = ConfigurationManager.getInstance();
        const config2 = ConfigurationManager.getInstance();

        console.log('config1 和 config2 是同一个实例:', config1 === config2);

        config1.setConfig('appName', 'MyApp');
        config1.setConfig('version', '1.0.0');
        config1.setConfig('debug', true);

        console.log('通过 config2 获取配置:');
        console.log('appName:', config2.getConfig('appName'));
        console.log('version:', config2.getConfig('version'));
        console.log('debug:', config2.getConfig('debug'));

        // 展示配置的独立性
        const allConfig = config2.getAllConfig();
        console.log('\n所有配置:');
        allConfig.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    }
} 