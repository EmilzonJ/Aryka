import * as React from 'react';
import {FC, PropsWithChildren} from 'react';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import {Toolbar} from "@mui/material";


export const FormDialog: FC<PropsWithChildren> = ({children}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        color="secondary"
        size="small"
        startIcon={<AddIcon/>}
      >
        Add
      </Button>

      <Dialog open={open} onClose={handleClose}>
        {children}
      </Dialog>
    </Toolbar>
  );
}
