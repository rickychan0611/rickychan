import React, { createRef, useState, useRef, useCallback } from "react"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import magBg from '../../images/mag-bg2.png'
import { mgz } from '../../layout/data'
import Hidden from '@material-ui/core/Hidden';

function getRandomColor() {
  let color = "hsl(" + Math.random() * 360 + ", 90%, 95%)";
  return color;
}

const Mag = ({ parallax }) => {

  const myRef = useRef(null)
  const onScroll = () => {
    console.log(parallax)
  }

  // initPages------------------------------------
  let factor1 = 1
  let initPages = 5
  return (
    <div ref={myRef} >
      {console.log(parallax)}

      <Parallax pages={mgz.length + 1}
        style={{
          backgroundImage: `url(${magBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
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
        {mgz.map((item, i)=>{
          return (
          <ParallaxLayer offset={i } speed={2} factor={4}
          style={{
            backgroundImage: 'linear-gradient(transparent, ' + getRandomColor() +','+ getRandomColor() + ', transparent)',
            height: 5000,
          }}
        />
        )
        })}

        {/* Title */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
          <Hidden smDown>
            <Box >
              <Typography variant='h1' style={{ marginTop: '60vh' }}>
                &nbsp;&nbsp;&nbsp;Magazine<br />
                Design<span style={{ color: 'red' }}>.</span>
              </Typography>
            </Box>
          </Hidden>

          <Hidden mdUp>
            <Box >
              <Typography variant='h1' style={{ marginTop: '70vh' }}>
                &nbsp;&nbsp;&nbsp;Mag<span style={{ color: 'red' }}>.</span><br />
                Design
            </Typography>
            </Box>
          </Hidden>

        </ParallaxLayer>
        {/* 1-------------------------------------------- */}

        {mgz.map((item, i) => {
          return (
            <div>
              <ParallaxLayer
                factor={1}
                offset={i + 1}
                speed={2}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Hidden smDown>
                  <img src={item.src} style={{
                    height: '100%', width: '100%', objectFit: 'scale-down',
                    transformOrigin: 'center', transform: 'scale(1.2,1.2)'
                  }}
                    onClick={() => parallax.scrollTo(i + 2)} />
                </Hidden>
                <Hidden mdUp>
                  <img src={item.src} style={{
                    marginLeft: 0, width: '100vw', transformOrigin: 'center',
                    transform: 'rotate(90deg) scale(2.1,2.1)'
                  }} />
                </Hidden>

              </ParallaxLayer>

              <ParallaxLayer
                factor={1}
                offset={i + 1 - .2}
                speed={.5}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >

                <Typography variant='h4' style={{ textAlign: "center" }}>
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

export default Mag