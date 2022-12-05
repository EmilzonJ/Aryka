import * as React from 'react';
import {FC, PropsWithChildren} from 'react';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import {Breakpoint, Stack, Toolbar, Typography} from "@mui/material";
import {FormDialogContext} from "@/context/form-dialog.context";
import {CancelOutlined, LoginOutlined} from "@mui/icons-material";
import {FieldValues, FormProvider, UseFormReturn} from "react-hook-form";


export interface FormDialogProps {
  open: boolean;
  handleClose: () => void;
  width?: Breakpoint;
  handleCreate?: () => void;
  title?: string;
  form: UseFormReturn<FieldValues, any>
  isEditing: boolean;

  onSubmit: () => void;
  isCreating: boolean;
}


export const FormDialog: FC<PropsWithChildren<FormDialogProps>> = (props) => {
  const {open, handleClose, width = 'md', handleCreate, children, title, form, onSubmit, isCreating, isEditing} = props;
  return (
    <Toolbar
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        variant="outlined"
        onClick={handleCreate}
        color="secondary"
        size="small"
        startIcon={<AddIcon/>}
      >
        Add
      </Button>

      <Dialog open={open} maxWidth={width} onClose={handleClose}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: '2rem',
            my: 1
          }}
        >
          {isCreating ? 'Crear ' : 'Editar '} {title}
        </Typography>
        <FormDialogContext.Provider value={{isEditing, isCreating}}>
          <FormProvider   {...form}>
            {children}
          </FormProvider>
        </FormDialogContext.Provider>

        <Stack direction='row' justifyContent='center' columnGap={3} mb={2}>
          <Button
            onClick={handleClose}
            variant="contained"
            color="warning"
            size={'large'}
            endIcon={<CancelOutlined/>}
          >
            Cancelar
          </Button>
          <Button
            onClick={onSubmit}
            variant="contained"
            color="success"
            size={'large'}

            endIcon={<LoginOutlined/>}
          >
            Guardar
          </Button>

        </Stack>
      </Dialog>

    </Toolbar>
  );
}
