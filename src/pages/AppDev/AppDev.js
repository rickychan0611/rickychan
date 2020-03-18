import React, { useEffect, useState, useRef, useCallback } from "react"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import Hidden from '@material-ui/core/Hidden';
import code from '../../images/codes.png'

import MyName from '../../layout/MyWorks'
import Footer from '../../layout/Footer'
import AboutMe from '../../layout/AboutMe'
import LetMeOrder from '../../layout/LetMeOrder'
import AmzClub from '../../layout/AmzClub'
import BoomTown from '../../layout/BoomTown'
import R10 from '../../layout/R10'
import Laviro from '../../layout/Laviro'

let initPages = 6

const AppDev = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [height1, setHeight1] = useState(0)
  const [height2, setHeight2] = useState(0)
  const [height3, setHeight3] = useState(0)
  const [height4, setHeight4] = useState(0)
  const [height5, setHeight5] = useState(0)
  const [totalHeight, setTotalHeight] = useState(0)
  const [pages, setPages] = useState(0)


  const ref = useRef(null)

  useEffect(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  }, [])

  // initPages------------------------------------
  let factor1 = 1
  if (screenSize.height < height1) {
    initPages = initPages + (screenSize.height / height1)
    factor1 = screenSize.height / height1
  }
  let factor2 = 1
  if (screenSize.height < height2) {
    initPages = initPages + (screenSize.height / height2)
    factor2 = 2
  }
  let factor3 = 1
  if (screenSize.height < height3) {
    initPages = initPages + (screenSize.height / height3)
    factor3 = 2
  }
  let factor4 = 1
  if (screenSize.height < height4) {
    initPages = initPages + (screenSize.height / height4)
    factor4 = 2
  }
  let factor5 = 1
  if (screenSize.height < height5) {
    initPages = initPages + (screenSize.height / height5)
    factor5 = 2
  }

  const divHeight1 = useCallback(node => {
    if (node !== null) {
      setHeight1(node.getBoundingClientRect().height);
    }
  }, []);

  const divHeight2 = useCallback(node => {
    if (node !== null) {
      setHeight2(node.getBoundingClientRect().height);
    }
  }, []);

  const divHeight3 = useCallback(node => {
    if (node !== null) {
      setHeight3(node.getBoundingClientRect().height);
    }
  }, []);

  const divHeight4 = useCallback(node => {
    if (node !== null) {
      setHeight4(node.getBoundingClientRect().height);
    }
  }, []);

  const divHeight5 = useCallback(node => {
    if (node !== null) {
      setHeight5(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div >
      {/* <div> */}
      {/* {initPages}<br></br> */}
      {/* </div> */}
      {/* {height1}<br></br>
      {height2}<br></br>
      {height3}<br></br>
      {height4}<br></br>
      {height5}<br></br>
      {screenSize.height} */}
      {/* backgounrd */}
      <Parallax pages={initPages}>

        <ParallaxLayer offset={1} speed={-2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #d7faf1, #e5e3ff, transparent)',
            height: 1000,
          }}
        />

        <ParallaxLayer offset={1.9 + (initPages / 5)} speed={-3}
          style={{
            backgroundImage: 'linear-gradient(transparent, #b3edfc, #ffefcc, transparent)',
            height: 1000,
          }}
        />

        <ParallaxLayer offset={2.5 + (initPages / 5)} speed={-2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fbfce1, #def7dc, transparent)',
            height: 1000,
          }}
        />
        <ParallaxLayer offset={3.5 + (initPages / 5)} speed={-3}
          style={{
            backgroundImage: 'linear-gradient(transparent, #d7fbfc, #e3ffe0, transparent)',
            height: 1000,
          }}
        />
        <ParallaxLayer offset={4 + (initPages / 5)} speed={-1}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fcedfc, #d2f5fa, transparent)',
            height: 2000,
          }}
        />

        <ParallaxLayer offset={0} speed={-.3}
          style={{
            backgroundImage: `url(${code})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left top',
            mixBlendMode: 'color-dodge',
          }}
        >
        </ParallaxLayer>
        {/* Title */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
          <Hidden smDown>
          <Box >
            <Typography variant='h1' style={{ marginTop: '60vh' }}>
              App Dev<span style={{ color: 'red' }}>.</span>
            </Typography>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <Box >
            <Typography variant='h1' style={{ marginTop: '70vh' }}>
              App<span style={{ color: 'red' }}>.</span><br />
              Dev
            </Typography>
          </Box>
          </Hidden>

          <Box mt={8} mb={20}>
            <Typography variant='h3'>
              My projects:
              <hr />
            </Typography>
          </Box>
        </ParallaxLayer>
        {/* 1-------------------------------------------- */}
        <ParallaxLayer
          factor={factor1}
          offset={1}
          speed={1}
          style={{
            paddingLeft: '5%', paddingRight: '5%', width: '85%',
            alignItems: 'center'
          }}
        >
          <div ref={divHeight1}>
            <LetMeOrder />
          </div>
        </ParallaxLayer>

        {/* 2-------------------------------------------- */}

        <ParallaxLayer
          factor={factor2}
          offset={1 + (initPages / 5)}
          speed={1}
          style={{
            paddingLeft: '5%', paddingRight: '5%', width: '85%',
            alignItems: 'center'
          }}        >
          <div ref={divHeight2}>
            <AmzClub />
          </div>
        </ParallaxLayer>

        {/* 3-------------------------------------------- */}

        <ParallaxLayer
          factor={factor3}
          offset={2 + (initPages / 5)}
          speed={1}
          style={{
            paddingLeft: '5%', paddingRight: '5%', width: '85%',
            alignItems: 'center'
          }}        >
          <div ref={divHeight3}>
            <BoomTown />
          </div>
        </ParallaxLayer>

        {/* 4-------------------------------------------- */}

        <ParallaxLayer
          factor={factor4}
          offset={initPages - 2}
          speed={1}
          style={{
            paddingLeft: '5%', paddingRight: '5%',
            alignItems: 'center'
          }}        >
          <div ref={divHeight4}>
            <R10 />
          </div>
        </ParallaxLayer>

        {/* 5-------------------------------------------- */}

        <ParallaxLayer
          factor={factor5}
          offset={initPages - .99}
          speed={1}
          style={{
            paddingRight: '10%',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center'
          }}        >
          <div ref={divHeight5} style={{ width: '85vw', marginBottom: 30 }}>
            <Laviro />
          </div>
        </ParallaxLayer>

        {/* </div> */}

      </Parallax>

    </div>
  )
}

export default AppDev