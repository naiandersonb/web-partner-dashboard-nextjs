import { ROUTES } from "@/constants/appRoutes";
import {
  AccountBox,
  AccountBoxOutlined,
  CalendarMonth,
  CalendarMonthOutlined,
  Help,
  HelpOutline,
  Home,
  HomeOutlined,
  HomeWork,
  HomeWorkOutlined,
  Paid,
  PaidOutlined,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import { JSX } from "react";

export interface ISidebarItem {
  key: string;
  title: string;
  icons: {
    selected: JSX.Element;
    outline: JSX.Element;
  };
  path: string;
  isVisible?: boolean;
}

export const sidebarListItems: { top: ISidebarItem[]; bottom: ISidebarItem[] } =
  {
    top: [
      {
        key: "home",
        title: "Página inicial",
        icons: { selected: <Home />, outline: <HomeOutlined /> },
        isVisible: false,
        path: ROUTES.DASHBOARD,
      },

      {
        key: "agenda",
        title: "Agenda",
        icons: {
          selected: <CalendarMonth />,
          outline: <CalendarMonthOutlined />,
        },
        path: ROUTES.AGENDA,
        isVisible: true,
      },
      {
        key: "profile",
        title: "Página profissional",
        icons: { selected: <AccountBox />, outline: <AccountBoxOutlined /> },
        path: ROUTES.PROFILE,
        isVisible: true,
      },
      {
        key: "locations",
        title: "Locais de atendimento",
        icons: { selected: <HomeWork />, outline: <HomeWorkOutlined /> },
        path: ROUTES.SERVICE_LOCATIONS,
        isVisible: true,
      },
      {
        key: "finances",
        title: "Financeiro",
        icons: { selected: <Paid />, outline: <PaidOutlined /> },
        path: ROUTES.FINANCES,
        isVisible: true,
      },
    ],
    bottom: [
      {
        key: "settings",
        title: "Configurações",
        icons: { selected: <Settings />, outline: <SettingsOutlined /> },
        path: ROUTES.SETTINGS,
        isVisible: true,
      },
      {
        key: "help",
        title: "Ajuda & Suporte",
        icons: { selected: <Help />, outline: <HelpOutline /> },
        path: ROUTES.SUPPORT,
        isVisible: true,
      },
    ],
  };
