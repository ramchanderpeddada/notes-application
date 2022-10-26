import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 21px;
  margin-left: 15px;
`;
const Headerbar = ({ open, handleDrawer }) => {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header open={open}>
          <Toolbar>
            <IconButton
              onClick={() => handleDrawer()}
              edge="start"
              sx={{ marginRight: "20px" }}
            >
              <Menu />
            </IconButton>
            <img src={logo} alt="logo" style={{ width: "25px" }} />
            <Heading>Keep</Heading>
          </Toolbar>
        </Header>
      </Box>
    </>
  );
};

export default Headerbar;
