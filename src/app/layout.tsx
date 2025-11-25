import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { MuiLocalizationWrapper } from "@/components";
import { getAuthenticatedUser } from "@/lib/auth.server";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContextClient";

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
  const userData = await getAuthenticatedUser();
  console.log({ userData });

  return (
    <html lang="pt-BR">
      <body className={outfit.variable}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <AuthProvider initialData={userData}>
              <MuiLocalizationWrapper>{children}</MuiLocalizationWrapper>
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
