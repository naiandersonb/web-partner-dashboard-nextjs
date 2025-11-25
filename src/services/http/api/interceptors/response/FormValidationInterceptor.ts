import {
  ApiFormValidationError,
  ValidationError,
} from "@/services/http/ApiFormValidationError";
import { isApiFormValidationErrorResponse } from "@/utils/api/ErrorStructureValidation";
import { ErrorResponseInterceptor } from "@/utils/http/axios/ErrorInterceptorChain";

export const FormValidationInterceptor: ErrorResponseInterceptor = (
  error,
  next,
) => {
  if (!isApiFormValidationErrorResponse(error)) return next(error);

  const validationErrors: ValidationError<Record<string, string>>[] =
    Object.keys(error.response?.data.errors).map((field) => ({
      field,
      errors: error.response?.data.errors[field],
    }));

  return Promise.reject(new ApiFormValidationError(validationErrors));
};
