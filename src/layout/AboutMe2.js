import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AboutMeText from '../components/AboutMeText'

import { useSpring, animated } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const MyName = () => {

  return (
    <div style={{ color: 'white', 
    maxWidth: 1020, }}>

      <Typography variant='h1'>
        About<br />Me<span style={{ color: 'red' }}>.</span>
      </Typography>
      <Box mt={3} style={{ maxWidth: 550 }}>
        <Typography variant='body-1'>
        <AboutMeText />
      </Typography>
      </Box>

    </div>
  )
}

export default MyName
