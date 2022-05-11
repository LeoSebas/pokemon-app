import { SwitchUnstyled } from "@mui/base";
import { AppBar, Switch, ToggleButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/material";

import LogoImage from "../assets/pokemon-logo.png";


export function CustomAppBar() {
  return (
    <AppBar
      component="nav"
      position="static"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "space-between",
      }}
    >
      <Box sx={{ flex: "1", paddingX: "10px" }}>
        <img width="100px" src={LogoImage} alt="F" />
      </Box>
      <Toolbar sx={{}}>
      </Toolbar>
    </AppBar>
  );
}
