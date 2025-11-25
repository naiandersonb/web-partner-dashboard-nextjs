import { ErrorDetailData } from "@/types";

interface UiErrorEventMap {
  "custom-snackbar": CustomEvent<ErrorDetailData>;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface WindowEventMap extends UiErrorEventMap {}
}

export const dispatchSnackbarUiEvent = (data: ErrorDetailData) => {
  const event = new CustomEvent("custom-snackbar", { detail: data });
  window.dispatchEvent(event);
};

export const onSnackbarUiHandler = (
  callback: (error: ErrorDetailData) => void,
) => {
  const listener = (event: CustomEvent) => {
    callback({
      duration: 1000,
      ...event.detail,
    });
  };

  window.addEventListener("custom-snackbar", listener);

  return () => window.removeEventListener("custom-snackbar", listener);
};
