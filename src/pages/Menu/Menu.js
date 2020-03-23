import React, { createRef, useState, useRef, useCallback } from "react"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import magBg from '../../images/sign-bg.png'
import { mgz } from '../../layout/data'
import Hidden from '@material-ui/core/Hidden';
import soleilkiLogo from '../../images/signage/soleilki-logo.png'
import soleilkiSign from '../../images/signage/soleilki-sign1.jpg'
import johnLogo from '../../images/signage/johnLogo.png'
import agapeLogo from '../../images/signage/agape.png'
import agapeMenu1 from '../../images/signage/agape-menu1.jpg'
import agapeMenu2 from '../../images/signage/agape-menu2.jpg'
import agapeStore from '../../images/signage/agape-store.jpg'




function getRandomColor() {
  let color = "hsl(" + Math.random() * 360 + ", 90%, 88%)";
  return color;
}

const ParallaxContainer = ({ children, parallax }) => {
  const onScroll = () => {
    console.log(parallax)
  }
  return (
    <div>
      {/* for desktop */}
      <Hidden smDown>
        <Parallax pages={13}
          style={{
            backgroundImage: `url(${magBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            // mixBlendMode: 'color-dodge',
            backgroundSize: '100vw auto'
          }}
          ref={ref => (parallax = ref)}
        >
          {children}
        </Parallax>
      </Hidden>

      {/* for mobile */}
      <Hidden mdUp>
        <Parallax pages={12}
          style={{
            backgroundImage: `url(${magBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top right',
            // mixBlendMode: 'color-dodge',
          }}
          ref={ref => (parallax = ref)}
        >
          {children}
        </Parallax>
      </Hidden>
    </div>
  )
}

const Menu = () => {
  const myRef = useRef(null)

  // initPages------------------------------------
  let factor1 = 1
  let initPages = 5
  return (
    <div ref={myRef} >
      <ParallaxContainer>


        <div>
          <ParallaxLayer offset={.1} speed={.5} factor={3}
            style={{
              backgroundImage: 'linear-gradient(transparent, ' + getRandomColor() +','+ getRandomColor() + ', transparent)',
              // backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}

          />
          <ParallaxLayer offset={0.5} speed={.5} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, ' + getRandomColor() +','+ getRandomColor() + ', transparent)',
              backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}
          />

          <ParallaxLayer offset={1.5} speed={1} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, ' + getRandomColor() +','+ getRandomColor() + ', transparent)',
            }}
          />
          <ParallaxLayer offset={2.5} speed={1} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}
          />
          <ParallaxLayer offset={3.5} speed={1} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}
          />
          <ParallaxLayer offset={4.5} speed={1} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, ' + getRandomColor() +','+ getRandomColor() + ', transparent)',
            }}
          />
          <ParallaxLayer offset={5.5} speed={2} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}
          />
          <ParallaxLayer offset={6.5} speed={1.5} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}
          />
          <ParallaxLayer offset={7.5} speed={1} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, #fff5e6, #fce9cc, transparent)',
            }}
          />
          <ParallaxLayer offset={8.5} speed={2} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}
          />
          <ParallaxLayer offset={9.5} speed={1.5} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, #ffffff, #ffffff, transparent)',
            }}
          />
          <ParallaxLayer offset={10.5} speed={1} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, ' + getRandomColor() +','+ getRandomColor() + ', transparent)',
            }}
          />
          <ParallaxLayer offset={11.5} speed={4} factor={4}
            style={{
              backgroundImage: 'linear-gradient(transparent, ' + getRandomColor() +','+ getRandomColor() + ', transparent)',
            }}
          />
        </div>



        {/* Title */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
          <Hidden smDown>
            <Box >
              <Typography variant='h1' style={{ marginTop: '60vh' }}>
              Menu <br />
              Design<span style={{ color: 'red' }}>.</span>
              </Typography>
            </Box>
          </Hidden>

          <Hidden mdUp>
            <Box >
              <Typography variant='h1' style={{ fontSize: 85, marginTop: '70vh' }}>
              Menu<br />
              Design<span style={{ color: 'red' }}>.</span>
              </Typography>
            </Box>
          </Hidden>

        </ParallaxLayer>
        {/* 1-------------------------------------------- */}

        <Hidden smDown>
          <ParallaxLayer factor={1} offset={0.8} speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 820, margin: 10 }}>
            I create logos and menus for restaurants. <br/>
            Giving them a unique style and overall branding. 
                </Typography>
          </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          speed={.2}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={soleilkiLogo} style={{
            height: 'auto', width: '90vw', objectFit: 'scale-down',
            transformOrigin: 'center'
          }}
          />
        </ParallaxLayer>

        {/* <ParallaxLayer factor={1} offset={1.3} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 820, margin: 10 }}>
            Soleilki Restaurants serves quality Japanese and Asian cuisine. Soleilki have 5 locations in Fort McMurray, Edmonton, Cold Lake, Lloydminster and Grande Prairie.
                </Typography>
          </ParallaxLayer> */}

        {/* soleilki store photo*/}

          <ParallaxLayer factor={1} offset={2} speed={1.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <img src={soleilkiSign} style={{
              height: '100%', maxWidth: '70%', objectFit: 'scale-down',
              transformOrigin: 'center', transform: 'scale(1.2,1.2)'
            }}
            />
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            20ft tall windows graphic, traditional yet elegant
                </Typography>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={1.9} speed={.7}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            Soleilki Restaurants serve quality Japanese and Asian cuisine. Soleilki have 5 locations in Fort McMurray, Edmonton, Cold Lake, Lloydminster and Grande Prairie.
                </Typography>
          </ParallaxLayer>

          {/* soleilki menu */}

          <ParallaxLayer offset={3} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fcjignipr"
              width="100%" height="90%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
            <body>(click the arrow to flip pages)</body>

          </ParallaxLayer>

          

          <ParallaxLayer factor={1} offset={2.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            Combining taditional style and modern pop style<br/><br/><br/><br/>
                </Typography>
          </ParallaxLayer>

          {/* soleilki drink menu */}

          <ParallaxLayer offset={4} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=ftuignipr"
              width="100%" height="100%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                          <body>(click the arrow to flip pages)</body>

              <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
                </Typography>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={3.8} speed={.3}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            The drink menu:
                </Typography>
          </ParallaxLayer>
        

          {/* John Logo */}
          <ParallaxLayer
            factor={1}
            offset={5}
            speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={johnLogo} style={{
              height: 'auto', width: '80vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={5.9} speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            John 316 Restaurant serves trandition Malaysian cuisine. They have 3 locations in Richmond, Vancouver and North Vancouver.
                </Typography>
          </ParallaxLayer>

          {/* John menu */}
          <ParallaxLayer offset={7} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fx9fv3lmz"
              width="100%" height="90%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                          <body>(click the arrow to flip pages)</body>

          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={6.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            Malaysian village style yet modern and clean<br/><br/><br/><br/>
            The Main menu:
             </Typography>
          </ParallaxLayer>

          {/* John menu */}
          <ParallaxLayer offset={8} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=f1h5bj5nv"
              width="100%" height="90%" height="100%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                          <body>(click the arrow to flip pages)</body>

          </ParallaxLayer>
          
          <ParallaxLayer factor={1} offset={7.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            The take out menu:
                </Typography>
          </ParallaxLayer>

          {/* Agape Logo */}
          <ParallaxLayer
            factor={1}
            offset={9}
            speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={agapeLogo} style={{
              height: 'auto', width: '100vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={10.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            Agape Coffee. A lifestyle for urban hipsters
             </Typography>
          </ParallaxLayer>

          {/* Agape store pic */}
          <ParallaxLayer
            factor={1}
            offset={10}
            speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={agapeStore} style={{
              height: 'auto', width: '90vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>
          {/* Agape menu */}
          <ParallaxLayer offset={11} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <img src={agapeMenu1} style={{
              height: 'auto', width: '50vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>
          {/* Agape menu */}
          <ParallaxLayer offset={12} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <img src={agapeMenu2} style={{
              height: 'auto', width: '50vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>
        </Hidden>

        {/* ------------------------------------------------mobile-------------------------------------------------*/}
        <Hidden mdUp>
        <ParallaxLayer factor={1} offset={0.8} speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 820, margin: 10, margin: 10,
              }}>
              I create logos and menus for restaurants. <br/>
              Giving them a unique style and overall branding.
             </Typography>
          </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          speed={.2}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={soleilkiLogo} style={{
            height: 'auto', width: '90vw', objectFit: 'scale-down',
            transformOrigin: 'center'
          }}
          />
        </ParallaxLayer>

        {/* soleilki store photo*/}

          <ParallaxLayer factor={1} offset={2} speed={1.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <img src={soleilkiSign} style={{
              height: '100%', maxWidth: '100%', objectFit: 'scale-down',
              transformOrigin: 'center', transform: 'scale(2,2)'
            }}
            />
            <body>20ft tall windows graphic<nr/>Traditional yet elegant</body>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={1.9} speed={.7}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800, margin: 10 }}>
            Soleilki Restaurants serve quality Japanese and Asian cuisine. <br/>
            Soleilki have 5 locations in Fort McMurray, Edmonton, Cold Lake, Lloydminster and Grande Prairie.
                </Typography>
          </ParallaxLayer>

          {/* soleilki menu */}

          <ParallaxLayer offset={3} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fcjignipr"
              width="100%" height="90%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
            <body>(click the arrow to flip pages)</body>

          </ParallaxLayer>

          

          <ParallaxLayer factor={1} offset={2.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800, margin: 10 }}>
            The design of the menu is a combation of taditional and modern pop style<br/><br/><br/><br/>
                </Typography>
          </ParallaxLayer>

          {/* soleilki drink menu */}

          <ParallaxLayer offset={4} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=ftuignipr"
              width="100%" height="100%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                          <body>(click the arrow to flip pages)</body>

              <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
                </Typography>
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={3.8} speed={.3}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            The drink menu:
                </Typography>
          </ParallaxLayer>
        

          {/* John Logo */}
          <ParallaxLayer
            factor={1}
            offset={5}
            speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={johnLogo} style={{
              height: 'auto', width: '80vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={5.9} speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            John 316 Restaurant serves trandition Malaysian cuisine. They have 3 locations in Richmond, Vancouver and North Vancouver.
                </Typography>
          </ParallaxLayer>

          {/* John menu */}
          <ParallaxLayer offset={7} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=fx9fv3lmz"
              width="100%" height="90%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                          <body>(click the arrow to flip pages)</body>

          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={6.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            Malaysian village style yet modern and clean<br/><br/><br/><br/>
            The Main menu:
             </Typography>
          </ParallaxLayer>

          {/* John menu */}
          <ParallaxLayer offset={8} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=f1h5bj5nv"
              width="100%" height="90%" height="100%" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
                          <body>(click the arrow to flip pages)</body>

          </ParallaxLayer>
          
          <ParallaxLayer factor={1} offset={7.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            The take out menu:
                </Typography>
          </ParallaxLayer>

          {/* Agape Logo */}
          <ParallaxLayer
            factor={1}
            offset={9}
            speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={agapeLogo} style={{
              height: 'auto', width: '100vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>

          <ParallaxLayer factor={1} offset={10.8} speed={.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography variant='h4' style={{ textAlign: "center", maxWidth: 800 }}>
            Agape Coffee. A lifestyle for urban hipsters
             </Typography>
          </ParallaxLayer>

          {/* Agape store pic */}
          <ParallaxLayer
            factor={1}
            offset={10}
            speed={.2}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src={agapeStore} style={{
              height: 'auto', width: '90vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>
          {/* Agape menu */}
          <ParallaxLayer offset={11} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <img src={agapeMenu1} style={{
              height: 'auto', width: '100vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>
          {/* Agape menu */}
          <ParallaxLayer offset={11.5} speed={1} factor={1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <img src={agapeMenu2} style={{
              height: 'auto', width: '100vw', objectFit: 'scale-down',
              transformOrigin: 'center'
            }}
            />
          </ParallaxLayer>
        </Hidden>
      </ParallaxContainer>
      {/* </Parallax> */}

    </div>
  )
}

export default Menu