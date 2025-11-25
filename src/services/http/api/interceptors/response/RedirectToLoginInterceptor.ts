import { ErrorResponseInterceptor } from "@/utils/http/axios/ErrorInterceptorChain";

export const RedirectToLoginInterceptor: ErrorResponseInterceptor = (
  error,
  next,
) => {
  if (error.response?.status !== 401) return next(error);

  if (typeof window !== "undefined") {
    const currentUrl = window.location.href;
    const REDIRECT_URL = `http://account.acheiconsulta.test/login?redirect=${encodeURIComponent(
      currentUrl,
    )}`;

    window.location.href = REDIRECT_URL;
  }
};
