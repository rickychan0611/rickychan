import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import { useSpring, animated, config } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import background from './images/background.jpg'
import Typography from '@material-ui/core/Typography';
import 'typeface-montserrat';

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
  const props = useSpring({
    to: [{ opacity: 1, color: '#ffaaee' }, { opacity: .5, color: 'green' }],
    from: { opacity: 0, color: 'red' }
  })

  return (
  <Typography component="div">
      <Parallax pages={3}
      style={{ 
        backgroundColor: 'black', 
        backgroundImage: `url(${background})`,   
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'right top',
      }}>
        
        <ParallaxLayer
          offset={0} 
          speed={0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
          <animated.div style={{
            color: 'white', width: '80%'}}>
          <Box fontWeight="fontWeightBold" fontSize={100} fontFamily="Monospace">
            Ricky Chan
          </Box>

          <h2 >Web developer &<br/> Grahpic Designer</h2>
          <h3 >from physical to digital</h3>
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <span onClick={() => props.parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer offset={2} speed={0.5}>
          <animated.div style={props}>I will fade in and out</animated.div>
        </ParallaxLayer>

      </Parallax>
    </Typography>
  );
}

export default App;
