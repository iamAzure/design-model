import { AbstractHandler } from '../AbstractHandler';
import { Request } from '../types/Request';
import { Response } from '../types/Response';

// 缓存拦截器
export class CacheInterceptor extends AbstractHandler {
    private cache: Map<string, { data: any; timestamp: number }> = new Map();
    private readonly CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

    public async handleRequest(request: Request): Promise<Request> {
        if (request.method === 'GET') {
            const cacheKey = this.getCacheKey(request);
            const cachedData = this.cache.get(cacheKey);

            if (cachedData && Date.now() - cachedData.timestamp < this.CACHE_DURATION) {
                console.log('缓存拦截器：使用缓存数据');
                // 这里可以返回缓存的响应
            }
        }
        return super.handleRequest(request);
    }

    public async handleResponse(response: Response): Promise<Response> {
        if (response.config.method === 'GET' && response.status === 200) {
            const cacheKey = this.getCacheKey(response.config);
            this.cache.set(cacheKey, {
                data: response.data,
                timestamp: Date.now()
            });
            console.log('缓存拦截器：缓存响应数据');
        }
        return super.handleResponse(response);
    }

    private getCacheKey(request: Request): string {
        return `${request.method}:${request.url}:${JSON.stringify(request.params)}`;
    }
} 