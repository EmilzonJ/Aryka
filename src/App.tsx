import {ThemeProvider} from '@mui/material/styles';

import {theme} from "@/mui";
import {SnackbarUtilsConfigurator} from '@/utilities';

import {SnackbarProvider} from 'notistack';

import React from "react";

import {AuthProvider} from "@/auth";
import {MainRouter} from "@/routers";

export const App = () => {
  return (
    // <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <SnackbarUtilsConfigurator/>
        <AuthProvider>
          <MainRouter/>
        </AuthProvider>
      </SnackbarProvider>
    // </ThemeProvider>
  )
}
