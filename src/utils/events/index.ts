import { CustomSnackbar } from "./CustomSnackbar";

interface UiErrorEventMap {
  "custom-snackbar": CustomEvent<CustomSnackbar>;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface WindowEventMap extends UiErrorEventMap {}
}

// dispatch new custom event
export const dispatchSnackbarUiEvent = (data: CustomSnackbar) => {
  const event = new CustomEvent("custom-snackbar", { detail: data });
  window.dispatchEvent(event);
};

// listen to custom event
export const onSnackbarUiHandler = (
  callback: (error: CustomSnackbar) => void,
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
