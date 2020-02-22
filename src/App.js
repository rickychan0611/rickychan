import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import background from './images/background.png'
import building from './images/building.png'
import buildingBW from './images/building-BW.png'
import bokeh1 from './images/bokeh1.png'
import bokeh2 from './images/bokeh2.png'

import { useTransition, useSpring, animated, config } from 'react-spring'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
  <Typography component="div">
    
      <Parallax pages={2}
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
          <animated.div style={{
            color: 'white', width: '80%'}}>
            <Box fontWeight="fontWeightBold" fontSize={70} letterSpacing={-4} lineHeight={1}>
              Hi, <br/>I'm Ricky
            </Box>
            <Box fontWeight="fontWeightLight" fontSize={17} letterSpacing={5} mt={2}>
            Full Stack Developer  &   <br/>Grahpic Designer
            </Box>
            <Box fontWeight="fontWeightLight" fontSize={12} letterSpacing={2} mt={2}>
            from physical to digital @ Vancouver
            </Box>
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
         

        <ParallaxLayer offset={0.999} speed={.3} style={{ backgroundColor: 'black' }} />

        {/* <ParallaxLayer offset={1} speed={0.5}>
          <span onClick={() => props.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>

        

        <ParallaxLayer offset={2} speed={0.5}>
          <animated.div style={props}>I will fade in and out</animated.div>
        </ParallaxLayer> */}

      </Parallax>
    </Typography>
  );
}

export default App;
