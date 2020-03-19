import React, { useEffect, useState, useRef, useCallback } from "react"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import magBg from '../../images/GD-bg.png'
import { ads } from '../../layout/data'
import Hidden from '@material-ui/core/Hidden';

const AdImage = ({src}) => {
  let transform = ''
  let styles = {
    width: '100vw', height: 'auto', transformOrigin: 'center',
    // transform: 'scale(1.2, 1.2)',
    boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  }
  var img = new Image()
  img.src = src
  if (img.width > img.height) {
    styles = {
      width: 'auto', height: '85vw', transformOrigin: 'center',
      transform: 'rotate(90deg) scale(1.2, 1.2)',
      boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  }
  return (
        <img src={src} 
        style={styles} />
        )
  }

const Ads = ({ parallax }) => {

  // initPages------------------------------------
  let factor1 = 1
  let initPages = 5
  return (
    <div >
      <Parallax pages={ads.length + 1}
        style={{
          backgroundImage: `url(${magBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          // mixBlendMode: 'color-dodge',
        }}
        ref={ref => (parallax = ref)}
      >
        <ParallaxLayer offset={4 + (initPages / 5)} speed={-.99}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fcedfc, #d2f5fa, transparent)',
            height: 2000,
          }}
        />
        <ParallaxLayer offset={0.5} speed={2} factor={4}
          style={{
            backgroundImage: 'linear-gradient(transparent, #b3edfc, transparent, #f0e8da, transparent)',
            height: 5000,
          }}
        />

        <ParallaxLayer offset={1.5 + (initPages / 5)} speed={2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fbfce1, transparent, #def7dc, transparent)',
            height: 5000,
          }}
        />
        <ParallaxLayer offset={2.5 + (initPages / 5)} speed={2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #d7fbfc, #e3ffe0, transparent)',
            height: 5000,
          }}
        />
         <ParallaxLayer offset={0.5} speed={2} factor={4}
          style={{
            backgroundImage: 'linear-gradient(transparent, #b3edfc, #c9f3ff, transparent)',
            height: 5000,
          }}
        />

        <ParallaxLayer offset={1.5 + (initPages / 5)} speed={2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fbfce1, #def7dc, transparent)',
            height: 5000,
          }}
        />
        <ParallaxLayer offset={2.5 + (initPages / 5)} speed={2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #e8f5e6, #e0d7f7, transparent)',
            height: 5000,
          }}
        />
         <ParallaxLayer offset={3.5} speed={2} factor={4}
          style={{
            backgroundImage: 'linear-gradient(transparent, #ffc9ee, transparent, #ffefcc, transparent)',
            height: 5000,
          }}
        />

        <ParallaxLayer offset={4.5 + (initPages / 5)} speed={2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fbfce1, transparent, #def7dc, transparent)',
            height: 5000,
          }}
        />
        <ParallaxLayer offset={5.5 + (initPages / 5)} speed={2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #ffe8f6, transparent, #e3ffe0, transparent)',
            height: 5000,
          }}
        />
         <ParallaxLayer offset={6.5} speed={2} factor={4}
          style={{
            backgroundImage: 'linear-gradient(transparent, #f5f2f4, transparent, #ffe8f6, transparent)',
            height: 5000,
          }}
        />
        <ParallaxLayer offset={7.5 + (initPages / 5)} speed={1}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fbfce1, transparent, #def7dc, transparent)',
            height: 5000,
          }}
        />
        <ParallaxLayer offset={8.5 + (initPages / 5)} speed={3}
          style={{
            backgroundImage: 'linear-gradient(transparent, #e8f5e6, transparent, #e0d7f7, transparent)',
            height: 5000,
          }}
        />
         <ParallaxLayer offset={9.5} speed={2} factor={4}
          style={{
            backgroundImage: 'linear-gradient(transparent, #b3edfc, transparent, #ffefcc, transparent)',
            height: 5000,
          }}
        />

        <ParallaxLayer offset={10.5 + (initPages / 5)} speed={1}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fbfce1, transparent, #def7dc, transparent)',
            height: 5000,
          }}
        />
        <ParallaxLayer offset={11.5 + (initPages / 5)} speed={5}
          style={{
            backgroundImage: 'linear-gradient(transparent, #ffe8f6, transparent, #e3ffe0, transparent)',
            height: 5000,
          }}
        />
         <ParallaxLayer offset={12.5} speed={2} factor={4}
          style={{
            backgroundImage: 'linear-gradient(transparent, #f5f2f4, transparent, #ffe8f6, transparent)',
            height: 5000,
          }}
          />
        <ParallaxLayer offset={13.5 + (initPages / 5)} speed={2}
          style={{
            backgroundImage: 'linear-gradient(transparent, #fbfce1, transparent, #def7dc, transparent)',
            height: 5000,
          }}
        />
        <ParallaxLayer offset={14.5 + (initPages / 5)} speed={5}
          style={{
            backgroundImage: 'linear-gradient(transparent, #d7fbfc, transparent, #e3ffe0, transparent)',
            height: 5000,
          }}
        />
        {/* Title */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
        <Hidden smDown>
          <Box >
            <Typography variant='h1' style={{ marginTop: '60vh' }}>
              &nbsp;&nbsp;&nbsp;Print Ads<br />
              Design<span style={{ color: 'red' }}>.</span>
            </Typography>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <Box >
            <Typography variant='h1' style={{ marginTop: '70vh' }}>
              &nbsp;&nbsp;&nbsp;Ads<span style={{ color: 'red' }}>.</span><br />
              Design
            </Typography>
          </Box>
          </Hidden>

        </ParallaxLayer>
        {/* 1-------------------------------------------- */}

        {ads.map((item, i) => {
          return (
            <div>
             <ParallaxLayer
              factor={1}
              offset={i + 1}
              speed={2}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
               <Hidden smDown>
                <img src={item.src} style={{
                  maxHeight: '70vh', maxWidth: 700, 
                  transformOrigin: 'center', transform: 'scale(1.2,1.2)',
                  boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
                  onClick={() => parallax.scrollTo(i + 2)} />
              </Hidden>
              <Hidden mdUp>
                <AdImage src={item.src} />
              </Hidden>

            </ParallaxLayer>

            <ParallaxLayer
              factor={1}
              offset={i+1-.2}
              speed={.5}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >

                <Typography variant='h4' style={{textAlign: "center"}}>
                  {item.text}
                </Typography>
            </ParallaxLayer>
            </div>
          )
        })}


      </Parallax>

    </div>
  )
}

export default Ads