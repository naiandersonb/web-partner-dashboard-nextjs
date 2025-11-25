import axios from "axios";
import { XsrfRequestInterceptor } from "./interceptors/request/XsrfRequestInterceptor";
import { ErrorInterceptorChain } from "@/utils/http/axios/ErrorInterceptorChain";
import {
  ErrorDetailInterceptor,
  FormValidationInterceptor,
  RedirectToLoginInterceptor,
} from "./interceptors/response";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(XsrfRequestInterceptor);

api.interceptors.response.use(
  (response) => response,
  (error) =>
    ErrorInterceptorChain(error)(
      RedirectToLoginInterceptor,
      FormValidationInterceptor,
      ErrorDetailInterceptor,
    ),
);

export default api;
