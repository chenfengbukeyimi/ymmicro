import { Response } from '@app/common/extend/index';
import { ApiResponse } from './interface';

const getDefApiResponse = (): ApiResponse => {
  const result: ApiResponse = {
    url: '',
    method: '',

    body: null,
    status: 404,
    success: false,
    message: '未找到相关资源',
  };

  return result;
};

const getApiResponseSuccess = (status: number) => {
  if (status === 200) return true;

  // 200 OK：请求成功。
  // 201 Created：创建成功。
  // 202 Accepted：请求已被接受，但处理尚未完成。
  // 203 Non-Authoritative Information：非授权信息，请求被成功接收，但返回的信息可能不准确。
  // 204 No Content：请求成功，但返回的数据为空。
  // 205 Reset Content：服务器已经清空了请求的数据，但没有设置新的数据。
  // 206 Partial Content：服务器已经清空了请求的数据，并且设置了一个新的数据。
  /** 请求成功(200,201,202,203,204,205,206) */
  const RequestContinues = [200, 201, 202, 203, 204, 205, 206];

  // 300 Multiple Choices：请求的资源可包括多个选项，相应可返回一个包含多个选项的响应。
  // 301 Moved Permanently：请求的资源已永久移动到新的URI，服务器应返回一个新的URI。
  // 302 Found：请求的资源已临时移动到新的URI，服务器应返回临时URI。
  // 303 See Other：请求的资源已永久移动到新的URI，服务器应返回新的URI。
  // 304 Not Modified：请求的资源未修改，服务器返回304状态码。
  // 307 Temporary Redirect：请求的资源临时移动到新的URI，服务器应返回临时URI。
  /** 客户端重定向或缓存策略 */
  const ClientCaches = [300, 301, 302, 303, 304, 307];

  // 400 Bad Request：服务器无法理解请求的语法。
  // 401 Unauthorized：请求要求身份验证。
  // 403 Forbidden：服务器拒绝请求。
  // 404 Not Found：请求的资源不存在。
  // 405 Method Not Allowed：请求中使用的HTTP方法被禁止。
  // 406 Not Acceptable：请求的资源内容无法满足请求头中的Accept属性。
  // 407 Proxy Authentication Required：代理服务器需要身份验证。
  // 408 Request Timeout：请求超时。
  // 409 Conflict：请求与服务器上的资源发生冲突。
  // 410 Gone：请求的资源已永久删除。
  // 411 Length Required：服务器无法处理未指定长度的请求。
  // 412 Precondition Failed：服务器无法满足请求的条件。
  // 413 Payload Too Large：请求的Payload大于服务器允许的最大值。
  // 414 URI Too Long：请求的URI大于服务器允许的最大长度。
  // 415 Unsupported Media Type：服务器无法处理请求的媒体类型。
  // 416 Range Not Satisfiable：服务器无法满足请求的范围。
  // 417 Expectation Failed：服务器无法满足期望值。
  /** 客户端请求发生错误 */
  const ClientErrors = [
    400, 401, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415,
    416, 417,
  ];

  // 500 Internal Server Error：服务器发生错误。
  // 501 Not Implemented：服务器不支持请求的功能。
  // 502 Bad Gateway：服务器作为 Gateway 运行，但未能成功处理请求。
  // 503 Service Unavailable：服务器暂时无法处理请求，但预测在短时间内可以恢复。
  // 504 Gateway Timeout：请求的网关超时。
  // 505 HTTP Version Not Supported：服务器不支持请求的HTTP版本。
  /** 服务端执行发生错误 */
  const ServerErrors = [500, 501, 502, 503, 504, 505];

  const SuccessStatus = [...RequestContinues, ...ClientCaches];
  const ExecutionErrors = [...ClientErrors, ...ServerErrors];

  if (ExecutionErrors.some((item) => item === status)) return false;

  if (SuccessStatus.some((item) => item === status)) return true;

  /** 其它 Http 状态码 */
  return false;
};

const getApiResponseMessage = (success: boolean, message?: string) => {
  return message || `请求${success ? '成功' : '失败'}`;
};

export function getApiResponse(response: Response): ApiResponse {
  const { statusCode } = response;

  const success = getApiResponseSuccess(statusCode);
  const message = getApiResponseMessage(success);
  const result = getDefApiResponse();

  result.message = message;
  result.status = statusCode;
  result.body = response.data;
  result.url = response.req.url;
  result.method = response.req.method;

  return result;
}
