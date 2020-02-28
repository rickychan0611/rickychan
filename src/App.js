import React, { useState } from 'react';
import theme from './layout/theme'
import {  ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import useStyles from './layout/styles.js'
import LayoutContainer from './layout/LayoutContainer';

const App = () => {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer />
    </ThemeProvider>
    )
  }
    
  export default App;
