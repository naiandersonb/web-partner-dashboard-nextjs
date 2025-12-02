"use client";

import { useState, ReactNode, FC, JSX } from "react";
import { Toolbar } from "./Toolbar";
import { Logo } from "@/components";
import { KeyboardTab } from "@mui/icons-material";
import {
  Stack,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  ListItem,
  IconButton,
  List,
  Box,
  CssBaseline,
  useTheme,
  alpha,
} from "@mui/material";
import { AppBar, Drawer, DrawerHeader } from "./styles";
import Link from "next/link";
import { sidebarListItems } from "./sidebarItems";
import { useDashboardNavigation } from "@/hooks";

export interface SidebarItem {
  title: string;
  icons: {
    selected: JSX.Element;
    outline: JSX.Element;
  };
  path: string;
  isVisible?: boolean;
}

interface Props {
  children: ReactNode;
}

export const DashboardLayout: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(true);

  const theme = useTheme();
  const itemSelectedBackground = alpha(theme.palette.primary.main, 0.06);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const { isSelected, currentPage } = useDashboardNavigation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={({ palette }) => ({
          left: open ? 0 : "65px",
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid",
          borderBottomColor: palette.divider,
        })}
      >
        <Toolbar
          title={currentPage}
          handleDrawerOpen={handleDrawerOpen}
          isOpen={open}
        />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Stack
            sx={{
              justifyContent: open ? "space-between" : "center",
              width: "100%",
              alignItems: "center",
              px: "16px",
            }}
            direction="row"
          >
            {open ? <Logo.Full /> : <Logo.Icon />}
            {open && (
              <IconButton onClick={handleDrawerClose} size="small">
                <KeyboardTab sx={{ rotate: "180deg", color: "black" }} />
              </IconButton>
            )}
          </Stack>
        </DrawerHeader>

        <List>
          {sidebarListItems.top.map((item) => {
            const isSelectedItem = isSelected(item.path);

            return (
              <Link key={item.title} href={item.path}>
                <ListItem
                  disablePadding
                  sx={[
                    { display: "block" },
                    ({ palette }) =>
                      isSelectedItem
                        ? {
                            color: palette.primary.main,
                            backgroundColor: itemSelectedBackground,
                          }
                        : {},
                  ]}
                >
                  <ListItemButton
                    sx={[
                      { minHeight: 48, px: 2.5 },
                      open
                        ? { justifyContent: "initial" }
                        : { justifyContent: "center" },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        { minWidth: 0, justifyContent: "center" },
                        open ? { mr: 3 } : { mr: "auto" },
                        ({ palette }) =>
                          isSelectedItem ? { color: palette.primary.main } : {},
                      ]}
                    >
                      {isSelectedItem
                        ? item.icons.selected
                        : item.icons.outline}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
