import { Box, Stack } from "@mui/material";
import { ReactNode } from "react";

export default async function DashboardRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Stack
      component="main"
      data-id="dashboard-container"
      sx={{ height: "100vh" }}
    >
      <header>cabeçalho</header>
      <Box flex={1}>{children}</Box>
      <footer>rodapé</footer>
    </Stack>
  );
}
