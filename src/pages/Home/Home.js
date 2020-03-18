import React, { Fragment } from 'react'
import LayoutContainer from '../../layout/LayoutContainer'
import buildingBW from '../../images/building-BW.png'
import bokeh1 from '../../images/bokeh1.png'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import useStyles from './styles'
import MyName from '../../layout/MyName'
import MyWorks from '../../layout/MyWorks'
import AboutMe2 from '../../layout/AboutMe2'
import MyPic from '../../layout/MyPic'
import ricky from '../../images/ricky.png'

const Home = () => {
  const classes = useStyles();
  return (
      <Parallax pages={3} className={classes.parallax}>
          <div style={{ 
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // height: '100vh',
          }}>

        {/* my name */}
        <ParallaxLayer factor={1} offset={0} speed={-.5} className={classes.myNameLayer}>
          <div style={{
            margin: '4vw', height: '100%',display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'black',
            marginTop: -20
            }}>
          <MyName />
          </div>
        </ParallaxLayer>

        {/* Building background*/}
        <ParallaxLayer offset={0} speed={0.1}
          style={{
            width: '100%',
            backgroundImage: `url(${buildingBW})`,
            backgroundSize: 'auto 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',
            paddingLeft: 0
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
            // paddingLeft: 25
          }}>
        </ParallaxLayer>

          {/* aboutMeBackground */}
        <ParallaxLayer factor={1.3} offset={0.99} speed={.4} className={classes.aboutMeBackground} />
        
        {/* my pic */}
        <ParallaxLayer factor={1} offset={0.97} speed={.2} className={classes.myPicLayer}>
          <div style={{
            margin: '4vw', height: '100%',
            }}>
            <img src={ricky} style={{ right: 0, height: '65vh' }} />
         </div>
        </ParallaxLayer>

        {/* my text */}
        <ParallaxLayer factor={1} offset={1} speed={.5} className={classes.myTextLayer}>
          <div style={{
            margin: '4vw'
            }}>
           <AboutMe2 />
         </div>
        </ParallaxLayer>
        
        {/* {my works} */}
        <ParallaxLayer factor={2} offset={1.99} speed={.5} className={classes.myWorksLayer}>
          <div style={{
            margin: '4vw', height: '100%',display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'black',
            marginTop: -20
            }}>
          <MyWorks />
          </div>
        </ParallaxLayer>


          </div>
        </Parallax>


  )
}

export default Home