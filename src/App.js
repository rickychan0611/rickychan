import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import background from './images/background.png'
import building from './images/building.png'
import buildingBW from './images/building-BW.png'
import bokeh1 from './images/bokeh1.png'
import bokeh2 from './images/bokeh2.png'

import { useTransition, useSpring, animated, config, interpolate } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let  theme = createMuiTheme();
theme = responsiveFontSizes(theme)
theme.typography.h1 = {
    fontSize: '6rem',
    lineHeight: '80%',
    '@media (min-width:330px)': {
      fontSize: '7rem',
    },
    '@media (min-width:800px)': {
      fontSize: '8rem',
    },
    '@media (min-width:1000px)': {
      fontSize: '10rem',
    },
  }

// 

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function App() {
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)



  const light = useSpring({
    opacity: toggle ? 1 : 0,
    // onRest:(()=>{
    //   setToggle(!toggle)
    // })
  })

  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } })

  const lightTranslate = useSpring({
    transform: toggle2 ? 'translate3d(1px,1px,1px)' : 'translate3d(2px,2px,1px)',
    duration: 100,
    velocity: 3,
    tension: 1000,
    onRest:(()=>{
      setToggle2(!toggle2)
    })
  })


  return (
    <ThemeProvider theme={theme}>
      <Typography component="div">
    
      <Parallax pages={4}
      style={{ 
        backgroundColor: 'black', 
        backgroundImage: `url(${background})`,   
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'right top',
      }}>


         {/* my name   */}
        <ParallaxLayer
          offset={0} 
          speed={-.5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
          <animated.div style={{color: 'white', width: '90vw',
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          }}>

            <Typography variant='h1'>
              Hi, <br/>I'm Ricky<span style={{color:'red'}}>.</span>
            </Typography>
            <Box mt={3}>
            <Typography variant='h3'>
               Full Stack Developer & <br/>Grahpic Designer
            </Typography>
            </Box>
            <Typography variant='overline'>
            from physical to digital @ Vancouver
            </Typography>
          </animated.div>
        </ParallaxLayer>


        {/* Building */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ 
            width: '100%',
            backgroundImage: `url(${buildingBW})`,   
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            // marginLeft: '11px'
          }}>
            
          </ParallaxLayer>

        {/* light */}
        <animated.div style={light}>

          <ParallaxLayer
          offset={0}
          speed={0.15}
          style={{ 
            width: '100%',
            backgroundImage: `url(${bokeh1})`,   
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            // marginLeft: '11px',
            mixBlendMode: 'color-dodge',
          }}>
          <animated.div style={lightTranslate}>
              {/* <img src={bokeh1} 
              style={{
                 height: '100%',
                 position: 'relative',
                  right: '0px',
                  bottom: '0px',
                 }} />  */}
          </animated.div>
          </ParallaxLayer>

          </animated.div>
         
          {/* About me */}
        <ParallaxLayer offset={0.999} speed={.35} style={{ backgroundColor: 'black', height: 600 }} />

        <ParallaxLayer offset={0.99} speed={.15} 
        style={{ display: 'flex', justifyContent: 'center' }}
          >
          <animated.div style={{color: 'white', width: '90vw',
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          }}>
            <Box mt={2}>
            <Typography variant='h1'>
                About me<span style={{color:'red'}}>.</span>
            </Typography>
            </Box>
          </animated.div>
          <animated.div style={{color: 'white', width: '90vw',
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          }}>
            <Box mt={2}>
            <Typography variant='p'>
                I am Ricky. I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah
            </Typography>
            </Box>
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={.3} 
        style={{ display: 'flex', justifyContent: 'center' }}
          >
          {/* <animated.div style={{color: 'white', width: '90vw',
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          }}>
            <Box mt={2}>
            <Typography variant='p'>
                I am Ricky. I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah
            </Typography>
            </Box>
          </animated.div> */}
        </ParallaxLayer>

   {/* App Deveploment */}
        {/* <ParallaxLayer offset={1.999} speed={.35} style={{ backgroundColor: 'blue' }} />

        <ParallaxLayer offset={1.99} speed={.15} 
        style={{ display: 'flex', justifyContent: 'center' }}
          >
          <animated.div style={{color: 'white', width: '90vw',
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          }}>
            <Box mt={2}>
            <Typography variant='h1'>
                About me<span style={{color:'red'}}>.</span>
            </Typography>
            </Box>
          </animated.div>
        </ParallaxLayer>
          
        <ParallaxLayer offset={1} speed={.15} 
        style={{ display: 'flex', justifyContent: 'center' }}
          >
          <animated.div style={{color: 'white', width: '90vw',
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          }}>
            <Box mt={2}>
            <Typography variant='p'>
                I am Ricky. I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah I have 13 years of experience in graphic deisgner. blah
            </Typography>
            </Box>
          </animated.div>
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1} speed={0.5}>
          <span onClick={() => props.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>

        

        <ParallaxLayer offset={2} speed={0.5}>
          <animated.div style={props}>I will fade in and out</animated.div>
        </ParallaxLayer> */}

      </Parallax>
    </Typography>
    </ThemeProvider>
  );
}

export default App;
