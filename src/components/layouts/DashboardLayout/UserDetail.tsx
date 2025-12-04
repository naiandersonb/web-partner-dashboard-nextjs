import { ExpandMoreOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItemButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import { MouseEvent } from "react";

interface UserDetailProps {
  handleToggleOpenMenu: (event: MouseEvent<HTMLElement>) => void;
}

export const UserDetail = ({ handleToggleOpenMenu }: UserDetailProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <List component="nav" sx={{ p: 0 }}>
      <ListItemButton onClick={handleToggleOpenMenu}>
        <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
          <Avatar
            sx={{
              width: 40,
              height: 40,
              backgroundColor: teal[50],
              fontSize: 16,
              color: teal[900],
            }}
            src=""
          >
            NB
          </Avatar>

          {!isMobile && (
            <Box>
              <Typography
                fontWeight={500}
                variant="body1"
                fontSize={{ sm: "14px", md: "16px" }}
                color="textPrimary"
                lineHeight={1}
              >
                Naianderson Bruno França da Silva
              </Typography>
              <Typography variant="caption" color="textSecondary">
                naianderson.bruno@gmail.com
              </Typography>
            </Box>
          )}

          <ExpandMoreOutlined
            sx={({ palette }) => ({ color: palette.text.secondary })}
          />
        </Stack>
      </ListItemButton>
    </List>
  );
};
