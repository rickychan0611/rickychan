import React, { useEffect, useState } from "react"
import buildingBW from '../images/building-BW.png'
import bokeh1 from '../images/bokeh1.png'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

import MyName from './MyName'
import Footer from './Footer'
import AboutMe from './AboutMe'
import LetMeOrder from './LetMeOrder'
import AmzClub from './AmzClub'
import BoomTown from './BoomTown'
import R10 from './R10'
import Laviro from './Laviro'
import Hidden from '@material-ui/core/Hidden';
import Graphics from './Graphics'

import GDbg from '../images/GD-bg.png'
import useStyles from './styles'
import code from '../images/codes.png'



const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
let pageN = 40
const LayoutContainer = () => {

  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const [pages, setPages] = useState(17)

  // add page if screen ratio is smaller than 0.48
  // page increases when screen decrases
  if (width / height > 0.48 && width / height < 1) {
    pageN = 40 + ((15 - height / 90))
  }

  if (width / height == 0.75) {
    pageN = 40 + ((10 - height / 230))
  }

  // if (width / height  ) {
  //   setPages(20)
  // }
  return (
    <div>
      width: {width} x height: {height}<br></br>
      {pageN}
      <Parallax pages={pageN} className={classes.parallax}>

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
        

        {/* App dev TITLE*/}
        <ParallaxLayer factor={5} offset={2.4} speed={.15}
          style={{
            width: '85%',
            display: 'block',
            paddingLeft: '5%',
            paddingRight: '5%',
          }}
        >
          <Box mt={2} style={{}}>
            <Typography variant='h1'>
              App dev
              <span style={{ color: 'red' }}>.</span>
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
        {/* <ParallaxLayer factor={6} offset={10} speed={.4} style={{
          // #c2c0c0
          backgroundImage: 'linear-gradient(to bottom, #ffffff, transparent)',
          height: '80%'
        }} />
        <ParallaxLayer factor={1.4} offset={10} speed={.4} style={{
          width: '100%',
          backgroundImage: `url(${GDbg})`,
          backgroundSize: 'auto 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          //  mixBlendMode: 'color-dodge',
        }} /> */}


        {/* ---------------Graphic Design Title ---------------- */}
        {/* ---------------XS only ---------------- */}
        <Hidden smUp>
          <ParallaxLayer factor={20} offset={14.5} speed={.2}
            style={{
              width: '85%',
              display: 'block',
              paddingLeft: '5%',
              paddingRight: '5%',
            }}
          >
            <Box mt={2} style={{}}>
              <Typography variant='h1' style={{ fontSize: 80, color: "white" }}>
                Graphic<span style={{ color: 'transparent', letterSpacing: -10, marginBottom: 50 }}> .</span>Design<span style={{ color: 'red' }}>.</span>
              </Typography>
            </Box>
            <br></br>
            <Graphics />

          </ParallaxLayer>
        </Hidden>

        {/*  >Md */}
        <Hidden mdDown>
          <ParallaxLayer factor={20} offset={6.5} speed={.2}
            style={{
              width: '85%',
              display: 'block',
              paddingLeft: '5%',
              paddingRight: '5%',
            }}
          >
            <Box mt={2} style={{}}>
              <Typography variant='h1' style={{ fontSize: 130, color: "white" }}>
                Graphic<span style={{ color: 'transparent', letterSpacing: -10 }}> .</span>Design<span style={{ color: 'red' }}>.</span>
              </Typography>
            </Box>

            <Graphics />

          </ParallaxLayer>
        </Hidden>

        {/* Md only */}
        <Hidden only={['xs', 'lg', 'xl']}>
          <ParallaxLayer factor={20} offset={7.5} speed={.2}
            style={{
              width: '85%',
              display: 'block',
              paddingLeft: '5%',
              paddingRight: '5%',
            }}
          >
            <Box mt={2} style={{}}>
              <Typography variant='h1' style={{ fontSize: 130, color: "white" }}>
                Graphic<span style={{ color: 'transparent', letterSpacing: -10 }}> .</span>Design<span style={{ color: 'red' }}>.</span>
              </Typography>
            </Box>

            <Graphics />

          </ParallaxLayer>
        </Hidden>

        {/* Footer */}
        <ParallaxLayer factor={1} offset={16} speed={.7} className={classes.myName}>
          <Footer />
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default LayoutContainer