"use client";

import { useState, ReactNode, FC } from "react";
import { Toolbar } from "./Toolbar";
import { Logo } from "@/components";
import { KeyboardTab } from "@mui/icons-material";
import {
  Stack,
  IconButton,
  List,
  Box,
  CssBaseline,
  useTheme,
  alpha,
  Divider,
} from "@mui/material";
import { AppBar, Drawer, DrawerHeader } from "./styles";
import { sidebarListItems } from "./sidebarItems";
import { useDashboardNavigation } from "@/hooks";
import { SidebarItem } from "./SidebarItem";

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
  const topVisibleItem = sidebarListItems.top.filter((i) => i.isVisible);

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
              px: "12px",
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

        <List sx={{ flex: 1, pt: 0 }}>
          {topVisibleItem.map((item) => {
            const isSelectedItem = isSelected(item.path);

            return (
              <SidebarItem
                key={item.key}
                itemSelectedBackground={itemSelectedBackground}
                item={item}
                isSelected={isSelectedItem}
                isOpen={open}
              />
            );
          })}
        </List>

        <Divider />

        <List sx={{ mb: 2 }}>
          {sidebarListItems.bottom.map((item) => {
            const isSelectedItem = isSelected(item.path);

            return (
              <SidebarItem
                key={item.key}
                itemSelectedBackground={itemSelectedBackground}
                item={item}
                isSelected={isSelectedItem}
                isOpen={open}
              />
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
