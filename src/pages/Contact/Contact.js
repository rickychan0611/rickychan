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
import Footer from '../../layout/Footer'
const Contact = () => {
  const classes = useStyles();
  return (
      <Parallax pages={1} className={classes.parallax}>
          <div style={{ 
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            // height: '100vh',
          }}>
        <Footer />
          </div>
        </Parallax>


  )
}

export default Contact