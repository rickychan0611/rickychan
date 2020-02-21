import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import { useSpring, animated, config } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

function App({ parallax }) {
  // const props = useSpring({
  //   config: config.gentle,
  //   opacity: 1, 
  //   from: {opacity: 0}
  // })
  const [toggle, setToggle] = useState(false)
  const props = useSpring({
    to: [{ opacity: 1, color: '#ffaaee' }, { opacity: .5, color: 'green' }],
    from: { opacity: 0, color: 'red' }
  })

  return (
    <div>
      <Parallax pages={3}>

        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: 'black' }} />
        
        {/* <ParallaxLayer  */}
          offset={0} 
          speed={0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
          <animated.div style={{color: 'white', width: '80%'}}>
            <h1 >Hi, I am Ricky, Hi, I am Ricky, web developer, grahic designer</h1>
          </animated.div>
        {/* </ParallaxLayer> */}

        <ParallaxLayer offset={1} speed={0.5}>
          <span onClick={() => parallax.scrollTo(1)}>Layers can contain anything</span>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />



        <ParallaxLayer offset={2} speed={0.5}>
          <animated.div style={props}>I will fade in and out</animated.div>
        </ParallaxLayer>

        

      </Parallax>

    </div>
  );
}

export default App;
