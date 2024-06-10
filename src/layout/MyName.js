import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
        Hi, <br />I'm Ricky<span style={{ color: 'red' }}>.</span>
      </Typography>
      <Box mt={3}>
        <Typography variant='h3'>
          Front-end Developer & <br />Graphic Designer
      </Typography>
      </Box>
      <Typography variant='overline'>
        from physical to digital @ Vancouver
      </Typography>

    </div>
  )
}

export default MyName
