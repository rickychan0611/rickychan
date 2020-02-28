import React from 'react'
import ricky from '../images/ricky.png'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Hidden from '@material-ui/core/Hidden'

const MyPic = () => {
  return (
    <div>
      {/* My Pic xs only */}
      <Hidden smUp>
        <ParallaxLayer offset={0.999} speed={.33} style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
        }}>
          <img src={ricky} style={{ bottom: 0, height: 500 }} />
        </ParallaxLayer>
      </Hidden>

      {/* My Pic Md only */}
      <Hidden only={['xs', 'lg', 'xl']}>
        <ParallaxLayer offset={0.999} speed={.33} style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', width: '95vw'
        }}>
          <img src={ricky} style={{ bottom: 0, height: 550 }} />
        </ParallaxLayer>
      </Hidden>

      {/* My Pic >Md*/}
      <Hidden mdDown>
        <ParallaxLayer offset={0.999} speed={.33} style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', width: '90vw'
        }}>
          <img src={ricky} style={{ bottom: 0, height: 700 }} />
        </ParallaxLayer>
      </Hidden>
    </div>
  )
}

export default MyPic