export interface ErrorDetailData {
  title: string;
  description?: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}
