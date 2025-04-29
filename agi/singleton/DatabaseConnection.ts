export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connectionString: string;
    private isConnected: boolean;

    private constructor() {
        this.connectionString = '';
        this.isConnected = false;
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public connect(connectionString: string): void {
        this.connectionString = connectionString;
        this.isConnected = true;
        console.log(`数据库连接成功: ${connectionString}`);
    }

    public disconnect(): void {
        this.isConnected = false;
        console.log('数据库连接已断开');
    }

    public isDatabaseConnected(): boolean {
        return this.isConnected;
    }

    public getConnectionString(): string {
        return this.connectionString;
    }
} 