import { ErrorDetail } from "@/services/http/ApiFormValidationError";
import { isErrorDetailResponse } from "@/utils/api/ErrorStructureValidation";
import { dispatchSnackbarUiEvent } from "@/utils/events";
import { ErrorResponseInterceptor } from "@/utils/http/axios/ErrorInterceptorChain";

export const ErrorDetailInterceptor: ErrorResponseInterceptor = (
  error,
  next,
) => {
  if (!isErrorDetailResponse(error)) return next(error);

  if (!error.config?.byPassErrorDetails?.includes(error.response.data.code)) {
    dispatchSnackbarUiEvent({
      title: error.response.data.title,
      description: error.response.data.detail,
      type: "error",
      duration: 3000,
    });
  } else {
    return Promise.reject(
      new ErrorDetail(
        error.response.data.title,
        error.response.data.detail,
        error.response.data.code,
        error.response.data.type,
      ),
    );
  }
};
