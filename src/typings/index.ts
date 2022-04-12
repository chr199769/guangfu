export interface ChartsProps {
  config?: any,
  className?: any,
}

export type ServiceMap = Record<string, {
  url: string;
  method: 'GET' | 'POST'
}>;

export interface BaseResponse<T = any> {
  statusCode: number;
  message?: string;
  data: T;
}

export type BaseRequestFunc = <T = any, P = Record<string, any>>(params?: P) => Promise<BaseResponse<T>>;