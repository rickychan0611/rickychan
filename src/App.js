import React, { useState } from 'react';
import theme from './layout/theme'
import {  ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import useStyles from './layout/styles.js'
import LayoutContainer from './layout/LayoutContainer'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppRoutes from './routes'

const App = () => {

  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
    )
  }
    
  export default App;
