"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "@mui/x-date-pickers/locales";
import { ptBR as ptBRDateFns } from "date-fns/locale";
import { ReactNode } from "react";

export function MuiLocalizationWrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  const localeText =
    ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ptBRDateFns}
      localeText={localeText}
    >
      {children}
    </LocalizationProvider>
  );
}
