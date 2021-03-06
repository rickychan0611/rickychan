import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }, 
    button: {
    borderStyle: 'solid', 
    borderColor: 'white', 
    borderWidth: .5,
    display: 'flex',
    justifyContent: 'center', 
    margin: 20,
    cursor: 'pointer',
    padding: 10
  }
}));


const MyWorks = () => {
  const classes = useStyles();

  return (
    <div style={{ color: 'white', 
    maxWidth: 1020, }}>

      <Typography variant='h1'>
        My<br />works<span style={{ color: 'red' }}>.</span>
      </Typography>
      <Box mt={10}>
      <Link to="/app-dev" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div 
          className={classes.button}>
          <Typography variant='h5'>
            App Development
          </Typography>
        </div>
      </Link>
      <Link to="/magazine" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div 
          className={classes.button}>
          <Typography variant='h5'>
            Magazine Design
          </Typography>
        </div>
      </Link>
      <Link to="/ads" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div 
          className={classes.button}>
          <Typography variant='h5'>
            Print Ads Design
          </Typography>
        </div>
        </Link>
        <Link to="/menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div 
          className={classes.button}>
          <Typography variant='h5'>
            Restaurant Menus
          </Typography>
        </div>
        </Link>
      </Box>
    </div>
  )
}

export default MyWorks
