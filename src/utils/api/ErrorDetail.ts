type ErrorCode = {
  origin: string;
  code: string;
};

const locallyHandledErrors: ErrorCode[] = [];

export const asLocallyHandled = (error: ErrorCode | ErrorCode[]) =>
  Array.isArray(error)
    ? error.forEach((err) => locallyHandledErrors.push(err))
    : locallyHandledErrors.push(error);

export const isLocallyHandled = (error: ErrorCode) =>
  locallyHandledErrors.some(
    (_error) => _error.code === error.code && _error.origin == error.origin,
  );
