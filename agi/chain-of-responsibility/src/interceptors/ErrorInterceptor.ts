import { AbstractHandler } from '../AbstractHandler';
import { Request } from '../types/Request';
import { Response } from '../types/Response';

// 错误处理拦截器
export class ErrorInterceptor extends AbstractHandler {
    public async handleRequest(request: Request): Promise<Request> {
        try {
            return await super.handleRequest(request);
        } catch (error) {
            console.error('错误拦截器：请求错误', error);
            throw error;
        }
    }

    public async handleResponse(response: Response): Promise<Response> {
        if (response.status >= 400) {
            console.error('错误拦截器：响应错误', {
                status: response.status,
                statusText: response.statusText,
                data: response.data
            });
            // 这里可以添加错误处理逻辑，比如显示错误提示
        }
        return super.handleResponse(response);
    }
} 