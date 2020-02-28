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

import { useTransition, useSpring, animated, config, interpolate } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import MyName from './MyName'
import AboutMeText from '../components/AboutMeText'
import useStyles from './styles'
import MyPic from './MyPic';


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

        {/* About me background */}
        <ParallaxLayer offset={0.999} speed={.2} className={classes.aboutMeBackground} />

        <MyPic />

        {/* APP background color */}
        <ParallaxLayer offset={1.7} speed={.4} style={{
          // height: 1000,
          backgroundImage: 'linear-gradient(to bottom right, #6e1357, #6e1336)'
        }} />

        {/* About me text >SM */}
        <Box display={{ xs: 'none', sm: 'block' }}>
          <ParallaxLayer offset={1} speed={.15}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap', flexDirection: 'column',
            }}  >
              <div style={{ color: 'white', marginLeft: '5%', flex: 1 }}>
                <Typography variant='h1'> About me <span style={{ color: 'red' }}>.</span> </Typography>
              </div>
              <div style={{ color: 'white', marginLeft: '5%', marginRight: '5%', marginTop: 20, marginBottom: '5%', flex: 1, maxWidth: 900 }}>
                <AboutMeText />
              </div>
            </div>
          </ParallaxLayer>
        </Box>

        {/* XS only */}
      <Hidden smUp>
          <ParallaxLayer offset={1.1} speed={.15}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap', flexDirection: 'column'
            }} >
              <div style={{ color: 'white', marginLeft: '5%', flex: 1 }}>
                <Typography variant='h1'>
                  About me
              <span style={{ color: 'red' }}>.</span>
                </Typography>
              </div>
              <div style={{ color: 'white', marginLeft: '5%', marginRight: '5%', marginTop: 20, flex: 1, maxWidth: 700 }}>
              <AboutMeText />
              </div>
            </div>
          </ParallaxLayer>
        </Hidden>

        {/* APP devepolement */}
        <ParallaxLayer offset={1.8} speed={.15}
          style={{
            maxWidth: '90vw', display: 'block',
            paddingLeft: '5%',
            paddingRight: '5%',

          }}
        >
          <Box color='white' mt={2} style={{}}>
            <Typography variant='h1'>
              App dev<span style={{ color: 'red' }}>.</span>
            </Typography>
          </Box>
          <Box color='white' mt={8} style={{}}>
            <Typography variant='overline'>
              My latest projects:
            </Typography>

            <Grid container>
              <Grid xs={12} md={6}>
                <Typography variant='h3' style={{ marginTop: 20 }}>
                  Restaurant Ordering System
            </Typography>
                <Typography variant='body2' style={{ marginTop: 10 }}>
                  Technologies:
            </Typography>
              </Grid>

              <Grid xs={12} md={6}>
                <img src={restApp} style={{ height: 340, bottom: 0 }} />
              </Grid>

            </Grid>
          </Box>
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