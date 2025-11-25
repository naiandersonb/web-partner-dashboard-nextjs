export interface CustomSnackbar {
  title: string;
  description?: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}
