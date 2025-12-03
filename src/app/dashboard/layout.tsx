import { DashboardLayout } from "@/components";
import { ReactNode } from "react";

export default async function DashboardRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
