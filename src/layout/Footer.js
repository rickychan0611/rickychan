import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { useSpring, animated } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const Footer = () => {

  return (
    <div style={{ color: 'white', width: '90vw' }}>

      <Typography variant='h1'>
        <br />Ricky Chan<span style={{ color: 'red' }}>.</span>
      </Typography>
      <Box mt={10}>
        <Typography variant='h3' style={{marginTop: 10}}>
          Full Stack Developer & <br />Grahpic Designer
      </Typography>
      </Box>
      <Typography variant='h4' style={{marginTop: 10}}>
      <Box mt={5}>
      Email: ric0611@gmail.com
      </Box>
      </Typography>

    </div>
  )
}

export default Footer
