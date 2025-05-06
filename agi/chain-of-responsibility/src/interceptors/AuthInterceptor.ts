import { AbstractHandler } from '../AbstractHandler';
import { Request } from '../types/Request';
import { Response } from '../types/Response';

// 认证拦截器
export class AuthInterceptor extends AbstractHandler {
    private token: string;

    constructor(token: string) {
        super();
        this.token = token;
    }

    public async handleRequest(request: Request): Promise<Request> {
        // 添加认证头
        request.headers = {
            ...request.headers,
            'Authorization': `Bearer ${this.token}`
        };
        console.log('认证拦截器：添加认证头');
        return super.handleRequest(request);
    }

    public async handleResponse(response: Response): Promise<Response> {
        // 处理认证相关的响应
        if (response.status === 401) {
            console.log('认证拦截器：处理未授权响应');
            // 这里可以添加刷新token的逻辑
        }
        return super.handleResponse(response);
    }
} 