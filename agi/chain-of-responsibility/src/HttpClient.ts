import { Handler } from './Handler';
import { Request } from './types/Request';
import { Response } from './types/Response';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { LoggingInterceptor } from './interceptors/LoggingInterceptor';
import { ErrorInterceptor } from './interceptors/ErrorInterceptor';
import { CacheInterceptor } from './interceptors/CacheInterceptor';

// HTTP 客户端
export class HttpClient {
    private requestHandler: Handler;
    private responseHandler: Handler;

    constructor(token?: string) {
        // 创建请求拦截器链
        const authInterceptor = new AuthInterceptor(token || '');
        const loggingInterceptor = new LoggingInterceptor();
        const errorInterceptor = new ErrorInterceptor();
        const cacheInterceptor = new CacheInterceptor();

        // 设置请求拦截器链
        authInterceptor
            .setNext(loggingInterceptor)
            .setNext(errorInterceptor)
            .setNext(cacheInterceptor);

        this.requestHandler = authInterceptor;

        // 创建响应拦截器链（反向顺序）
        const responseAuthInterceptor = new AuthInterceptor(token || '');
        const responseLoggingInterceptor = new LoggingInterceptor();
        const responseErrorInterceptor = new ErrorInterceptor();
        const responseCacheInterceptor = new CacheInterceptor();

        // 设置响应拦截器链
        responseCacheInterceptor
            .setNext(responseErrorInterceptor)
            .setNext(responseLoggingInterceptor)
            .setNext(responseAuthInterceptor);

        this.responseHandler = responseCacheInterceptor;
    }

    // 发送请求
    public async request(config: Request): Promise<Response> {
        try {
            // 处理请求
            const processedRequest = await this.requestHandler.handleRequest(config);

            // 模拟发送请求
            const response = await this.mockRequest(processedRequest);

            // 处理响应
            return await this.responseHandler.handleResponse(response);
        } catch (error) {
            console.error('请求失败:', error);
            throw error;
        }
    }

    // 模拟请求（实际项目中应该使用真实的 HTTP 客户端）
    private async mockRequest(request: Request): Promise<Response> {
        console.log('发送请求:', request);
        
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 模拟响应
        return {
            status: 200,
            statusText: 'OK',
            data: { message: '请求成功' },
            headers: {},
            config: request
        };
    }
} 