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
import TinTin from '../../layout/TinTin'
import Sub4Sub from '../../layout/Sub4Sub'
import AlphaPay from '../../layout/AlphaPay'
import UrbanFavor from '../../layout/UrbanFavor'
import PeacefulRest from "../../layout/PeacefulRest";
import PeacefulMall from "../../layout/PeacefulMall";

let initPages = window.innerWidth > 950 ? 10 : 10

const AppDev = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [height1, setHeight1] = useState(0)

  useEffect(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  }, [])

  // initPages------------------------------------
  let factor1 = 1
  if (screenSize.height < height1) {
    initPages = initPages + (screenSize.height / height1)
    factor1 = screenSize.height / height1
  }

  return (
    <div >

      <Parallax pages={initPages}>

        <ParallaxLayer offset={1} speed={-2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #d7faf1, #e5e3ff, transparent)',
            height: 1000,
          }}
        />
        <ParallaxLayer offset={1} speed={-2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #d7faf1, #e5e3ff, transparent)',
            height: 1000,
          }}
        />
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
        <ParallaxLayer offset={4 + (initPages / 5)} speed={1}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fcedfc, #d2f5fa, transparent)',
            height: 2000,
          }}
        />

        <ParallaxLayer offset={6 + (initPages / 5)} speed={-.5}
          style={{
            backgroundImage: 'linear-gradient(transparent, #ffefcc, #fcedfc, #d2f5fa, transparent, #b3edfc)',
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
          <div style={{ marginBottom: 350 }}>
            <PeacefulMall />
          </div>
          <div style={{ marginBottom: 350 }}>
            <PeacefulRest />
          </div>
          <div style={{ marginBottom: 350 }}>
            <TinTin />
          </div>
          <div style={{ marginBottom: 350 }}>
            <LetMeOrder />
          </div>
          <div style={{ marginBottom: 350 }}>
            <AmzClub />
          </div>
          <div style={{ marginBottom: 350 }}>
            <UrbanFavor />
          </div>
          <div style={{ marginBottom: 350 }}>
            <AlphaPay />
          </div>
          <div style={{ marginBottom: 350 }}>
            <Laviro />
          </div>
          <div style={{ marginBottom: 350 }}>
            <Sub4Sub />
          </div>
          <div style={{ marginBottom: 350 }}>
            <BoomTown />
          </div>
          <div style={{ marginBottom: 350 }}>
            <R10 />
          </div>
        </ParallaxLayer>

      </Parallax>

    </div >
  )
}

export default AppDev