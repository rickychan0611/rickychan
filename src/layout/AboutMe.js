import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { useSpring, animated } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import code from '../images/codes.png'
import AboutMeText from '../components/AboutMeText'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './styles'

import MyPic from './MyPic'

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      {/* --------------- About me background ---------------- */}
        {/* XS only */}
      <Hidden smUp>
        <ParallaxLayer factor={1.9} offset={0.999} speed={.15} className={classes.aboutMeBackground} 
        style={{  }} />
      </Hidden>


      {/* About me background */}
      {/* >Md */}
      <Hidden mdDown>
        <ParallaxLayer factor={.5} offset={0.999} speed={.2} className={classes.aboutMeBackground} 
        style={{ height: 1000 }} />
      </Hidden>

      {/* About me background */}
      {/* Md only */}
      <Hidden only={['xs', 'lg', 'xl']}>
        <ParallaxLayer factor={.5} offset={0.999} speed={.3} className={classes.aboutMeBackground} 
        style={{ height: 1000 }} />
      </Hidden>

      {/* --------------MyPic----------------- */}
      <MyPic />


      {/* ---------------APP dev background ---------------- */}
    {/* XS only */}
       <Hidden smUp>
          {/* APP background color */}
          <ParallaxLayer factor={17} offset={2.1} speed={.5} style={{
            // backgroundImage: 'linear-gradient(to bottom right, #ffffff, #ffffff)',
            // height: '100%'
          }} />
          <ParallaxLayer  offset={2.1} speed={.5} style={{
            width: '100%',
            backgroundImage: `url(${code})`,
            //  backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
            //  mixBlendMode: 'color-dodge',
          }} />
      </Hidden>

      {/*  >Md */}
      <Hidden mdDown>
          {/* APP background color */}
          <ParallaxLayer factor={4.5} offset={2} speed={.4} style={{
            backgroundImage: 'linear-gradient(to bottom right, #ffffff, #c2c0c0)',
            // height: '120%'
          }} />
          <ParallaxLayer offset={2} speed={.4} style={{
            width: '100%',
            backgroundImage: `url(${code})`,
            //  backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
            //  mixBlendMode: 'color-dodge',
          }} />
      </Hidden>

       {/* Md only */}
      <Hidden only={['xs', 'lg', 'xl']}>
          {/* APP background color */}
          <ParallaxLayer factor={5.8} offset={1.9} speed={.4} style={{
            backgroundImage: 'linear-gradient(to bottom right, #ffffff, #c2c0c0)',
            // height: '120%'
          }} />
          <ParallaxLayer offset={1.9} speed={.4} style={{
            width: '100%',
            backgroundImage: `url(${code})`,
            //  backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
            //  mixBlendMode: 'color-dodge',
          }} />
      </Hidden>

      {/* ---------------AboutMeText ---------------- */}
      {/* AboutMeText XS only */}
      <Hidden smUp>
        <ParallaxLayer offset={1.3} speed={.15}>
          <div style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap', flexDirection: 'column'
          }} >
            <div style={{ color: 'white', marginLeft: '5%', flex: 1 }}>
              <Typography variant='h1'>
                About me
              <span style={{ color: 'red' }}>.</span>
              </Typography>
            </div>
            <div style={{ color: 'white', marginLeft: '5%', marginRight: '5%', marginTop: 20, flex: 1, maxWidth: 700, fontSize: 18 }}>
              <AboutMeText />
            </div>
          </div>
        </ParallaxLayer>
      </Hidden>

      {/*AboutMeText >Md */}
      <Hidden mdDown>
        <ParallaxLayer offset={1} speed={.15}>
          <div style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap', flexDirection: 'column',
          }}  >
            <div style={{ color: 'white', marginLeft: '5%', flex: 1, marginTop: 60, }}>
              <Typography variant='h1'> About me<span style={{ color: 'red' }}>.</span> </Typography>
            </div>
            <div style={{ color: 'white', marginLeft: '5%', marginRight: '5%', marginTop: 60, marginBottom: '5%', flex: 1, maxWidth: 900, fontSize: 26 }}>
              <AboutMeText />
            </div>
          </div>
        </ParallaxLayer>
      </Hidden>

      {/*AboutMeText Md only */}
      <Hidden only={['xs', 'lg', 'xl']}>
        <ParallaxLayer offset={1.1} speed={.15}>
          <div style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexWrap: 'wrap', flexDirection: 'column',
          }}  >
            <div style={{ color: 'white', marginLeft: '5%', flex: 1 }}>
              <Typography variant='h1'> About&nbsp;me <span style={{ color: 'red' }}>.</span> </Typography>
            </div>
            <div style={{ color: 'white', marginLeft: '5%', marginRight: '5%', marginTop: 30, marginBottom: '5%', flex: 1, maxWidth: 900, fontSize: 26 }}>
              <AboutMeText />
            </div>
          </div>
        </ParallaxLayer>
      </Hidden>
    </div>
  )
}

export default AboutMe