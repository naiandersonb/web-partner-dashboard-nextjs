import { KeyboardTab } from "@mui/icons-material";
import { IconButton, Toolbar as MuiToolbar, Typography } from "@mui/material";

interface Props {
  handleDrawerOpen: () => void;
  hideMobileMenuButton?: boolean;
  isOpen?: boolean;
  title: string;
}

export const Toolbar: React.FC<Props> = ({
  handleDrawerOpen,
  title,
  hideMobileMenuButton = false,
  isOpen = false,
}) => {
  return (
    <MuiToolbar sx={{ position: "relative" }}>
      {!hideMobileMenuButton && !isOpen && (
        <IconButton
          aria-label="toggle open/close drawer"
          onClick={handleDrawerOpen}
          sx={({ palette }) => ({
            position: "absolute",
            width: "24px",
            height: "24px",
            backgroundColor: palette.grey[200],
            ":hover": {
              backgroundColor: palette.grey[300],
            },
            zIndex: 10,
            left: "-12px",
            marginRight: 5,
          })}
        >
          <KeyboardTab sx={{ color: "black", fontSize: "16px" }} />
        </IconButton>
      )}

      <Typography variant="h6" noWrap component="div" color="textPrimary">
        {title}
      </Typography>
    </MuiToolbar>
  );
};
