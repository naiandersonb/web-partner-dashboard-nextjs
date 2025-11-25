import { InternalAxiosRequestConfig } from "axios";

import api from "../..";
import { cookies } from "next/headers";

export const XsrfRequestInterceptor = async (
  config: InternalAxiosRequestConfig,
) => {
  const cookieStore = await cookies();
  config.headers["X-XSRF-TOKEN"] = cookieStore.get("XSRF-TOKEN");

  if (
    config.method &&
    ["post", "put", "delete"].includes(config.method) &&
    !cookieStore.get("XSRF-TOKEN")
  ) {
    await api.get("/sanctum/csrf-cookie").then(() => {
      config.headers["X-XSRF-TOKEN"] = cookieStore.get("XSRF-TOKEN");
    });
  }

  return config;
};
