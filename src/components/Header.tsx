import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

import {Drawer} from "@/components";

export const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <CalendarMonthRoundedIcon sx={{ transform: "scale(1.5)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.7rem", paddingLeft: "5%" }}>
                Arika
              </Typography>
              <Drawer />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Citas" />
                <Tab label="Servicios" />
                <Tab label="Usuarios" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
