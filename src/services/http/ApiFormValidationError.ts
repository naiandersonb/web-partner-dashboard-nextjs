export type ValidationError<T> = {
  field: keyof T;
  errors: string[];
};

export class ErrorDetail {
  constructor(
    public readonly title: string,
    public readonly detail: string,
    public readonly code: string,
    public readonly type?: string,
  ) {}
}

export class ApiFormValidationError<T> {
  constructor(public readonly validations: ValidationError<T>[]) {}
}
