// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosRequestConfig } from "axios";

// Extensão da interface AxiosRequestConfig
declare module "axios" {
  export interface AxiosRequestConfig {
    byPassErrorDetails?: string[];
  }
}
