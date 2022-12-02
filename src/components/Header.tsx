import React, {useState} from "react";
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,} from "@mui/material";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

import {Drawer} from "@/components";

import {logout} from '@/auth/services'
import {useLocation, useNavigate} from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const [value, setValue] = useState<string>(location.pathname);
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const handleLogout = async () => {
    await logout();

  }
  const onChange = (newValue: string) => {
    setValue(newValue);

  }
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);

  }


  return (
    <React.Fragment>
      <AppBar color="inherit" sx={{
        position: "sticky",
      }}>
        <Toolbar>
          <CalendarMonthRoundedIcon sx={{transform: "scale(1.5)"}}/>
          {isMatch ? (
            <>
              <Typography sx={{fontSize: "1.7rem", paddingLeft: "5%"}}>
                Arika
              </Typography>
              <Drawer/>
            </>
          ) : (
            <>
              <Tabs
                sx={{marginLeft: "auto"}}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => onChange(value)}
              >
                <Tab
                  value='/citas'
                  label="Citas"
                  onClick={() => handleNavigate("/citas")}
                />
                <Tab
                  value='/servicios'
                  label="Servicios"
                  onClick={() => handleNavigate("/servicios")}
                />
                <Tab
                  value='/usuarios'
                  label="Usuarios"
                  onClick={() => handleNavigate("/usuarios")}
                />
              </Tabs>
              <Button
                sx={{marginLeft: "auto"}}
                variant="contained"
                onClick={handleLogout}
                color="primary"
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
