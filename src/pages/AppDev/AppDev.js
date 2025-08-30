import React, { useEffect, useState, useRef, useCallback } from "react"
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
import PomChat from "../../layout/PomChat";

const AppDev = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [scrollY, setScrollY] = useState(0)
  const backgroundRef = useRef(null)

  useEffect(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate background position based on scroll
  const backgroundPosition = `${50 + (scrollY * 0.1)}% ${50 - (scrollY * 0.1)}%`

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Rainbow Background */}
      <div 
        ref={backgroundRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          background: `
            linear-gradient(60deg, 
              rgb(255, 255, 255) 0%, 
              rgba(219, 251, 249, 0.91) 14.28%, 
              rgba(251, 251, 225, 0.93) 28.57%, 
              rgb(255, 255, 255) 42.86%, 
              rgb(237, 226, 248) 57.14%, 
              rgba(242, 215, 233, 0.86) 71.43%, 
              rgb(174, 213, 252) 85.71%, 
              rgb(255, 255, 255) 100%
            )
          `,
          backgroundSize: '300% 300%',
          backgroundPosition: backgroundPosition,
          zIndex: 0,
          animation: 'rainbowMove 8s ease-in-out infinite',
          transform: 'translate(-25%, -25%)'
        }} 
      />

      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${code})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left top',
        mixBlendMode: 'color-dodge',
        opacity: 0.05,
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Title Section */}
        <div style={{ 
          paddingTop: '10vh',
          paddingBottom: '5vh'
        }}>
          <Hidden smDown>
            <Box>
              <Typography variant='h1' style={{ 
                color: '#333',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>
                App Dev<span style={{ color: 'red' }}>.</span>
              </Typography>
            </Box>
          </Hidden>

          <Hidden mdUp>
            <Box>
              <Typography variant='h1' style={{ 
                color: '#333',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>
                App<span style={{ color: 'red' }}>.</span><br />
                Dev
              </Typography>
            </Box>
          </Hidden>

          <Box mt={8} mb={4}>
            <Typography variant='h3' style={{ 
              color: '#333',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
              My projects:
              <hr style={{ borderColor: '#333' }} />
            </Typography>
          </Box>
        </div>

        {/* Components Section */}
        <div style={{
          paddingBottom: '5vh'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '100px'
          }}>
            <div>
              <PeacefulMall />
            </div>
            <div>
              <PeacefulRest />
            </div>
            <div>
              <PomChat />
            </div>
            <div>
              <TinTin />
            </div>
            <div>
              <LetMeOrder />
            </div>
            <div>
              <AmzClub />
            </div>
            <div>
              <UrbanFavor />
            </div>
            <div>
              <AlphaPay />
            </div>
            <div>
              <Laviro />
            </div>
            <div>
              <Sub4Sub />
            </div>
            <div>
              <BoomTown />
            </div>
            <div>
              <R10 />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for Rainbow Movement */}
      <style>
        {`
          @keyframes rainbowMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  )
}

export default AppDev