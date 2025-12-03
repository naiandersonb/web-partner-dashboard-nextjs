import { ROUTES } from "@/constants/appRoutes";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useDashboardNavigation = () => {
  const pathname = usePathname();

  const isSelected = (path: string) => {
    const isMatch = pathname.startsWith(path);
    if (path === ROUTES.DASHBOARD) {
      return path === pathname || pathname === `${path}/`;
    }

    return isMatch;
  };

  const currentPage = useMemo(() => {
    const headerTitles = {
      [ROUTES.DASHBOARD]: "Página inicial",
      [ROUTES.SERVICE_LOCATIONS]: "Locais de atendimento",
      [ROUTES.AGENDA]: "Agenda",
      [ROUTES.FINANCES]: "Financeiro",
      [ROUTES.AGENDA_SETTINGS]: "Configurações da agenda",
      [ROUTES.SETTINGS]: "Configurações",
      [ROUTES.SUPPORT]: "Ajuda & Suporte",
    };

    return headerTitles[pathname as keyof typeof ROUTES];
  }, [pathname]);

  return { isSelected, pathname, currentPage };
};
