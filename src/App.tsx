import {ThemeProvider} from '@mui/material/styles';

import {theme} from "@/mui";
import {SnackbarUtilsConfigurator} from '@/utilities';

import {SnackbarProvider} from 'notistack';

import React from "react";

import {AuthProvider} from "@/auth";
import {mainRouter} from "@/routers";
import {RouterProvider} from "react-router-dom";

export const App = () => {
  console.log('App');
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <SnackbarUtilsConfigurator/>
        <AuthProvider>
          <RouterProvider router={mainRouter} />
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
)
}
