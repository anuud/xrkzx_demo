import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// 针对AxiosRequestConfig配置进行扩展
export interface HInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => any;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface HRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HInterceptors<T>;
}
