import {ThemeProvider} from '@mui/material/styles';

import theme from "./theme";
import {SnackbarUtilsConfigurator} from './utilities';

import {SnackbarProvider} from 'notistack';

import React from "react";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Login, Home} from '@/pages'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <SnackbarUtilsConfigurator/>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
