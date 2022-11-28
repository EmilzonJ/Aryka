import React, {useState} from "react";
import {Drawer as MuiDrawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Citas", "Servicios", "Usuarios"];
export const Drawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <MuiDrawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          style={
            {
              width: "250px",
              padding: "0",
            }
          }
        >
          {pages.map((page, index) => (
            <ListItemButton key={index} sx={{
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid #ccc",
            }}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </MuiDrawer>
      <IconButton
        sx={{color: "white", marginLeft: "auto", transform: "scale(1.5)"}}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="primary"/>
      </IconButton>
    </React.Fragment>
  );
};
