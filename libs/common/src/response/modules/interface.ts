import { DateType } from '@app/common/interface/index';

export type ExceptionInfo<T = string | object> = T extends object
  ? {
      statusCode: number;
      message: string;
    }
  : string;

/** 接口统一返回响应体数据结构 */
export interface ApiResponse<T = unknown> {
  /** 请求内容 */
  url: string;
  method: string;
  req_body?: object;
  req_query?: object;
  req_params?: object;
  req_time?: DateType;

  /** 响应内容 */
  body: T;
  status: number;
  success: boolean;
  message: string;
  res_time?: DateType;

  /** 用户相关信息 */
  ip?: string;
  user?: object;
}
