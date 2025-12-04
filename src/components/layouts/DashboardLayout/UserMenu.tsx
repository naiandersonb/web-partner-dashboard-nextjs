import {
  AccountCircleOutlined,
  AutorenewOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { UserDetail } from "./UserDetail";

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleToggleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <UserDetail handleToggleOpenMenu={handleToggleOpenMenu} />

      <Menu
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{ paper: { sx: { boxShadow: 2, borderRadius: 0 } } }}
        onClose={handleClose}
        anchorEl={anchorEl}
        open={open}
      >
        <Paper sx={{ width: 250, maxWidth: "100%", boxShadow: "none" }}>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            <ListItemText>Meus dados</ListItemText>
          </MenuItem>

          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <AutorenewOutlined />
            </ListItemIcon>
            <ListItemText>Meu plano</ListItemText>
          </MenuItem>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <LogoutOutlined />
            </ListItemIcon>
            <ListItemText>Sair da conta</ListItemText>
          </MenuItem>
        </Paper>
      </Menu>
    </div>
  );
};
