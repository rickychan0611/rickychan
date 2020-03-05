import React from 'react';
import buildingBW from '../images/building-BW.png'
import bokeh1 from '../images/bokeh1.png'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

import MyName from './MyName'
import AboutMe from './AboutMe'
import LetMeOrder from './LetMeOrder'
import AmzClub from './AmzClub'
import BoomTown from './BoomTown'
import R10 from './R10'
import Laviro from './Laviro'
import Hidden from '@material-ui/core/Hidden';
import GDbg from '../images/GD-bg.png'
import useStyles from './styles'

import ad1 from '../images/ad/ad1.jpg'
import ad2 from '../images/ad/ad2.jpg'
import ad3 from '../images/ad/ad3.jpg'
import ad5 from '../images/ad/ad5.jpg'
import ad6 from '../images/ad/ad6.jpg'
import ad7 from '../images/ad/ad7.jpg'
import ad8 from '../images/ad/ad8.jpg'
import ad9 from '../images/ad/ad9.jpg'
import ad10 from '../images/ad/ad10.jpg'
import ad11 from '../images/ad/ad11.jpg'
import ad12 from '../images/ad/ad12.jpg'
import ad13 from '../images/ad/ad13.jpg'

import mz1 from '../images/ad/mz1.jpg'
import mz2 from '../images/ad/mz2.jpg'
import mz3 from '../images/ad/mz3.jpg'
import mz4 from '../images/ad/mz4.jpg'
import mz5 from '../images/ad/mz5.jpg'
import mz6 from '../images/ad/mz6.jpg'


const ads = [
  { src: ad1 },
  { src: ad2 },
  { src: ad3 },
  { src: ad5 },
  { src: ad6 },
  { src: ad7 },
  { src: ad8 },
  { src: ad9 },
  { src: ad10 },
  { src: ad11 },
  { src: ad12 },
  { src: ad13 },
]

const mgz = [
  { src: mz1 },
  { src: mz2 },
  { src: mz3 },
  { src: mz4 },
  { src: mz5 },
  { src: mz6 },

]


const LayoutContainer = () => {

  const classes = useStyles();

  return (
    <div>
      <Parallax pages={12} className={classes.parallax}>

        {/* my name */}
        <ParallaxLayer factor={1} offset={0} speed={-.5} className={classes.myName}>
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
        <ParallaxLayer factor={5} offset={2} speed={.15}
          style={{
            width: '85%',
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
              <hr />
            </Typography>

            <LetMeOrder />
            <br /><br /><hr /><br /><br />
            <AmzClub />
            <br /><br /><hr /><br /><br />
            <BoomTown />
            <br /><br /><hr /><br /><br />
            <R10 />
            <br /><br /><hr /><br /><br />
            <Laviro />
          </Box>
          <hr />
        </ParallaxLayer>

        {/* Graphic Design */}

        {/* ---------------Graphic Design background ---------------- */}

        {/* Graphic Design background color */}
        <ParallaxLayer factor={6} offset={6} speed={.1} style={{
          // #c2c0c0
          backgroundImage: 'linear-gradient(to bottom, #ffffff, transparent)',
          height: '40%'
        }} />
        <ParallaxLayer factor={1.4} offset={6} speed={.1} style={{
          width: '100%',
          backgroundImage: `url(${GDbg})`,
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          //  mixBlendMode: 'color-dodge',
        }} />
        {/* ---------------Graphic Design Title ---------------- */}

        {/* <Hidden smUp> */}
        <ParallaxLayer offset={6.4} speed={.4}
          style={{
            width: '85%',
            display: 'block',
            paddingLeft: '5%',
            paddingRight: '5%',
          }}
        >
          <Box mt={2} style={{}}>
            <Typography variant='h1' style={{ fontSize: 130 }}>
              Graphic<span style={{ color: 'transparent', letterSpacing: -10 }}> .</span>Design<span style={{ color: 'red' }}>.</span>
            </Typography>
          </Box>

        {/* ---------------Print Ads ---------------- */}

          <Box mt={20} style={{color: '#9c9c9c'}}>
            <Typography variant='h2'>
              Print Ads:
            </Typography>
            <hr />
          </Box>
          <Grid container>
            {ads.map(item =>{
              return (
                <Grid xs={12} md={6}>
                  <img src={item.src} style={{ width: '100%', marginTop: -4, objectFit: 'scale-down' }} />
                </Grid>
              )
            })}
          </Grid>


        {/* --------------- Magazine ---------------- */}

        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />

        <Box mt={8} style={{color: '#9c9c9c'}}>
            <Typography variant='h2' >
              Magazine Layout
            </Typography>
             <hr />

          </Box>
          <Grid container>
            {mgz.map(item =>{
              return (
                <Grid xs={12} md={6}>
                  <img src={item.src} style={{ width: '100%', marginTop: -4, objectFit: 'scale-down' }} />
                </Grid>
              )
            })}
          </Grid>

          {/* --------------- Magazine ---------------- */}

        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />

        <Box mt={8} style={{color: '#9c9c9c'}}>
            <Typography variant='h2' >
              Magazine Layout
            </Typography>
             <hr />

          </Box>
          <Grid container>
            {mgz.map(item =>{
              return (
                <Grid xs={12} md={6}>
                  <img src={item.src} style={{ width: '100%', marginTop: -4, objectFit: 'scale-down' }} />
                </Grid>
              )
            })}
          </Grid>
          
        </ParallaxLayer>
        {/* </Hidden> */}


      </Parallax>
    </div>
  )
}

export default LayoutContainer