import React from 'react';

import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import background from '../images/background.png'
import building from '../images/building.png'
import buildingBW from '../images/building-BW.png'
import bokeh1 from '../images/bokeh1.png'
import bokeh2 from '../images/bokeh2.png'
import ricky from '../images/ricky.png'
import restApp from '../images/restApp.png'
import letMeOrder from '../images/letMeOrder.png'
import Icon from '@material-ui/core/Icon';


import { useTransition, useSpring, animated, config, interpolate } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MyName from './MyName'
import AboutMe from './AboutMe'

import AboutMeText from '../components/AboutMeText'
import LetMeOrder from './LetMeOrder'
import useStyles from './styles'


const LayoutContainer = () => {

  const classes = useStyles();

  return (
    <div>
      <Parallax pages={4} className={classes.parallax}>

        {/* my name */}
        <ParallaxLayer offset={0} speed={-.5} className={classes.myName}>
          <MyName />
        </ParallaxLayer>

        {/* Building background*/}
        <ParallaxLayer offset={0} speed={0.1}
          style={{
            width: '100%',
            backgroundImage: `url(${buildingBW})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
          }}>

        </ParallaxLayer>

        {/* light */}
        <ParallaxLayer offset={0} speed={0.15}
          style={{
            width: '100%',
            backgroundImage: `url(${bokeh1})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            mixBlendMode: 'color-dodge',
          }}>
        </ParallaxLayer>

        <AboutMe />

        {/* APP devepolement */}
        <ParallaxLayer offset={2} speed={.15}
          style={{
            width:'85%',
            display: 'block',
            paddingLeft: '5%',
            paddingRight: '5%',
          }}
        >
          <Box mt={2} style={{}}>
            <Typography variant='h1'>
              App dev<span style={{ color: 'red' }}>.</span>
            </Typography>
          </Box>
          <Box mt={8} style={{}}>
            <Typography variant='h3'>
              My projects:
              <hr></hr>
            </Typography>

           <LetMeOrder />

          </Box>
          <hr/>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={1} speed={0.5}>
          <span onClick={() => props.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>

        

        <ParallaxLayer offset={2} speed={0.5}>
          <animated.div style={props}>I will fade in and out</animated.div>
        </ParallaxLayer> */}

      </Parallax>
    </div>
  )
}

export default LayoutContainer