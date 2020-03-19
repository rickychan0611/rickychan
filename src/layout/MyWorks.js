import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { useSpring, animated } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
          <Typography variant='h4'>
            App Development
          </Typography>
        </div>
      </Link>
      <Link to="/magazine" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div 
          className={classes.button}>
          <Typography variant='h4'>
            Magazine Design
          </Typography>
        </div>
      </Link>
      <Link to="/ads" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div 
          className={classes.button}>
          <Typography variant='h4'>
            Print Ads Design
          </Typography>
        </div>
        </Link>
      </Box>

    </div>
  )
}

export default MyWorks
