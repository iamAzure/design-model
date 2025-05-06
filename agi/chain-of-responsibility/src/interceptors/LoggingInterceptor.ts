import { AbstractHandler } from '../AbstractHandler';
import { Request } from '../types/Request';
import { Response } from '../types/Response';

// 日志拦截器
export class LoggingInterceptor extends AbstractHandler {
    public async handleRequest(request: Request): Promise<Request> {
        console.log('日志拦截器：请求开始', {
            url: request.url,
            method: request.method,
            headers: request.headers,
            data: request.data
        });
        return super.handleRequest(request);
    }

    public async handleResponse(response: Response): Promise<Response> {
        console.log('日志拦截器：响应结束', {
            status: response.status,
            statusText: response.statusText,
            data: response.data
        });
        return super.handleResponse(response);
    }
} 