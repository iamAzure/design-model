import { HttpClient } from './HttpClient';

// 创建 HTTP 客户端
const client = new HttpClient('your-token-here');

// 发送 GET 请求
async function sendGetRequest() {
    try {
        const response = await client.request({
            url: '/api/users',
            method: 'GET',
            params: { page: '1', limit: '10' }
        });
        console.log('GET 请求响应:', response);
    } catch (error) {
        console.error('GET 请求失败:', error);
    }
}

// 发送 POST 请求
async function sendPostRequest() {
    try {
        const response = await client.request({
            url: '/api/users',
            method: 'POST',
            data: { name: 'John', age: 30 }
        });
        console.log('POST 请求响应:', response);
    } catch (error) {
        console.error('POST 请求失败:', error);
    }
}

// 运行示例
async function runExample() {
    console.log('=== 发送 GET 请求 ===');
    await sendGetRequest();

    console.log('\n=== 发送 POST 请求 ===');
    await sendPostRequest();
}

runExample(); 