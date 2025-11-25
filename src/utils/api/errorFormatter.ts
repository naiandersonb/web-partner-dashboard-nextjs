import { FieldValues, UseFormSetError } from "react-hook-form";

interface ApiValidationError {
  field: string;
  errors: string[];
}

export interface ApiErrorResponse {
  validations: ApiValidationError[];
}

// Função para configurar erros no formulário
export const errorFormatterForHookForm = <T extends FieldValues>(
  apiErrors: ApiErrorResponse,
  setError: UseFormSetError<T>,
): void => {
  if (!apiErrors?.validations) return;

  apiErrors.validations.forEach(({ field, errors }) => {
    setError(field as never, {
      type: "manual",
      message: errors[0] || "Erro desconhecido",
    });
  });
};
