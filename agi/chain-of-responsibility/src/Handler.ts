import { Request } from './types/Request';
import { Response } from './types/Response';

// 处理者接口
export interface Handler {
    setNext(handler: Handler): Handler;
    handleRequest(request: Request): Promise<Request>;
    handleResponse(response: Response): Promise<Response>;
} 