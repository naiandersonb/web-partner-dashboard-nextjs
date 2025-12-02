import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { MuiLocalizationWrapper, DashboardLayout } from "@/components";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContextClient";
import { CssBaseline } from "@mui/material";
import { getAuthenticatedUser } from "@/lib/auth.server";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achei Consulta",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={outfit.variable}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider initialData={null}>
              <MuiLocalizationWrapper>
                <DashboardLayout>{children}</DashboardLayout>
              </MuiLocalizationWrapper>
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
