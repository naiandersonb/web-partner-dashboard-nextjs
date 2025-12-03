import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { ISidebarItem } from "./sidebarItems";

interface SidebarItemProps {
  item: ISidebarItem;
  isSelected: boolean;
  isOpen: boolean;
  itemSelectedBackground: string;
}

export const SidebarItem = ({
  item,
  isOpen,
  isSelected,
  itemSelectedBackground,
}: SidebarItemProps) => {
  return (
    <ListItem
      key={item.title}
      href={item.path}
      component={Link}
      disablePadding
      sx={{
        display: "block",
        color: isSelected ? "primary.main" : "text.primary",
        backgroundColor: isSelected ? itemSelectedBackground : "transparent",
      }}
    >
      <ListItemButton
        sx={{
          justifyContent: isOpen ? "initial" : "center",
          minHeight: 48,
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={({ palette }) => ({
            minWidth: 0,
            justifyContent: "center",
            mr: isOpen ? 3 : "auto",
            color: isSelected ? palette.primary.main : palette.text.secondary,
          })}
        >
          {isSelected ? item.icons.selected : item.icons.outline}
        </ListItemIcon>
        <ListItemText
          primary={item.title}
          sx={[isOpen ? { opacity: 1 } : { opacity: 0 }]}
        />
      </ListItemButton>
    </ListItem>
  );
};
