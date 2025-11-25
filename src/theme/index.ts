"use client";

import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const baseTheme = createTheme({
  palette,
});

const theme = createTheme({
  cssVariables: true,
  palette,
  typography: {
    fontFamily: "var(--font-outfit)",
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.size === "medium" && {
            "& .MuiChip-label": {
              padding: "6px 10px 8px",
            },
          }),
        }),
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
        size: "medium",
        slotProps: {
          inputLabel: {
            shrink: true,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px !important",
          textTransform: "none",
          boxShadow: "none",
        },
        outlined: {
          color: baseTheme.palette.primary.main,
          border: `1px solid ${baseTheme.palette.grey[100]}`,
        },
        containedError: {
          color: baseTheme.palette.error.main,
        },
      },
    },
  },
});

export default theme;
