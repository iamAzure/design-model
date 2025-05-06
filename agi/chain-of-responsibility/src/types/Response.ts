// 响应类型定义
export interface Response {
    status: number;
    statusText: string;
    data: any;
    headers: Record<string, string>;
    config: Request;
} 