import { Handler } from './Handler';
import { Request } from './types/Request';
import { Response } from './types/Response';

// 抽象处理者类
export abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public async handleRequest(request: Request): Promise<Request> {
        if (this.nextHandler) {
            return this.nextHandler.handleRequest(request);
        }
        return request;
    }

    public async handleResponse(response: Response): Promise<Response> {
        if (this.nextHandler) {
            return this.nextHandler.handleResponse(response);
        }
        return response;
    }
} 