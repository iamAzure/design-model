// 请求类型定义
export interface Request {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    data?: any;
    params?: Record<string, string>;
    withCredentials?: boolean;
    timeout?: number;
} 