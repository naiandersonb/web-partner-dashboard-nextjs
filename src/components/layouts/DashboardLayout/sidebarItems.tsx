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

export const sidebarListItems = {
  top: [
    {
      title: "Página inicial",
      icons: { selected: <Home />, outline: <HomeOutlined /> },
      isVisible: false,
      path: ROUTES.DASHBOARD,
    },

    {
      title: "Agenda",
      icons: {
        selected: <CalendarMonth />,
        outline: <CalendarMonthOutlined />,
      },
      path: ROUTES.AGENDA,
      isVisible: true,
    },
    {
      title: "Página profissional",
      icons: { selected: <AccountBox />, outline: <AccountBoxOutlined /> },
      path: ROUTES.PROFILE,
      isVisible: true,
    },
    {
      title: "Locais de atendimento",
      icons: { selected: <HomeWork />, outline: <HomeWorkOutlined /> },
      path: ROUTES.SERVICE_LOCATIONS,
      isVisible: true,
    },
    {
      title: "Financeiro",
      icons: { selected: <Paid />, outline: <PaidOutlined /> },
      path: ROUTES.FINANCES,
      isVisible: true,
    },
  ],
  bottom: [
    {
      title: "Configurações",
      icons: { selected: <Settings />, outline: <SettingsOutlined /> },
      path: ROUTES.AGENDA_SETTINGS,
      isVisible: true,
    },
    {
      title: "Ajuda & Suporte",
      icons: { selected: <Help />, outline: <HelpOutline /> },
      path: ROUTES.SUPPORT,
      isVisible: true,
    },
  ],
};
