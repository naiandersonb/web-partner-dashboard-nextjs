/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApiFormValidationError,
  ErrorDetail,
} from "@/services/http/ApiFormValidationError";
import { AxiosError } from "axios";

export const isApiFormValidationErrorResponse = (
  error: any | AxiosError,
): boolean =>
  error.response?.status === 422 &&
  typeof error.response?.data?.message === "string" &&
  error.response?.data?.errors &&
  typeof error.response?.data?.errors === "object" &&
  Object.keys(error.response?.data?.errors).every(
    (key) =>
      Array.isArray(error.response?.data?.errors[key]) &&
      error.response?.data.errors[key].every((err) => typeof err === "string"),
  );

export const isApiFormValidationError = <T>(
  error: any,
): error is ApiFormValidationError<T> =>
  error instanceof ApiFormValidationError;

export const isErrorDetailResponse = (
  error: any | AxiosError,
): error is {
  response: {
    data: {
      title: string;
      detail: string;
      code: string;
      type?: string;
    };
  };
} => {
  return (
    typeof error.response?.data?.title === "string" &&
    typeof error.response.data?.detail === "string" &&
    typeof error.response.data?.code === "string"
  );
};

export const isErrorDetail = (error: any): error is ErrorDetail => {
  return (
    typeof error?.title === "string" &&
    typeof error.detail === "string" &&
    typeof error?.code === "string"
  );
};
