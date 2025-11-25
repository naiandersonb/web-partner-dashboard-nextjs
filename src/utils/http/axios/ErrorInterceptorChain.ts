/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";

export type ErrorResponseInterceptor = (
  error: AxiosError<any>,
  next: (error: AxiosError) => unknown,
) => any;

export const ErrorInterceptorChain = (error: AxiosError) => {
  return (...chain: ErrorResponseInterceptor[]): any => {
    let index = 0;

    const next = (err: AxiosError): any => {
      const interceptor = chain[index];
      index++;

      if (interceptor) return interceptor(err, next);
      return Promise.reject(err);
    };

    return next(error);
  };
};
