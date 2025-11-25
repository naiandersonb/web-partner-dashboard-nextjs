import { ErrorResponseInterceptor } from "@/utils/http/axios/ErrorInterceptorChain";

const REDIRECT_URL = `http://account.acheiconsulta.test/login?redirect=${window.location.href}`;

export const RedirectToLoginInterceptor: ErrorResponseInterceptor = (
  error,
  next,
) => {
  if (error.response?.status !== 401) return next(error);

  window.location.href = REDIRECT_URL;
};
