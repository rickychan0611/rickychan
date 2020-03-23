import React, { useState } from 'react';
import theme from './layout/theme'
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import useStyles from './layout/styles.js'
import MenuDrawer from './components/MenuDrawer'
import { BrowserRouter, Link } from "react-router-dom";

import AppRoutes from './routes'

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div style={{ position: "absolute", zIndex: 1000, margin: 20 }}>
            <MenuDrawer></MenuDrawer>
          </div>
          <div style={{ zIndex: 1 }}>
            <AppRoutes />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;
