import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import peacefulRestaurant from '../images/peacefulmall.png'
import screenshot1 from '../images/sub4sub1.png'
import screenshot2 from '../images/sub4sub2.png'
import screenshot3 from '../images/sub4sub3.png'
import screenshot4 from '../images/selforder4.png'
import screenshot5 from '../images/selforder5.png'
import screenshot6 from '../images/selforder6.png'
import screenshot7 from '../images/selforder7.png'
import ModalPic from '../components/ModalPic'

const scsreenshots = [
  { src: screenshot1, width: 50 },
  { src: screenshot2, width: 50 },
  { src: screenshot3, width: 50 },
  { src: screenshot4, width: 50 },
  { src: screenshot5, width: 50 },
  { src: screenshot6, width: 110 },
  { src: screenshot7, width: 110 },
]

const PeacefulMall = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => {
    setOpenModal(false);
  };

  const [modalImg, setModalImg] = useState('')

  return (
    <Grid container mr={2}>
      <ModalPic open={openModal} close={handleClose} modalImg={modalImg} />

      <Grid xs={12} md={6}>
        <Typography variant='h3' style={{ marginTop: 20 }}>
          Peaceful Mall
        </Typography>
        <Typography variant='body2' style={{ marginTop: 10, }}>
          Peaceful Mall is a versatile online platform available on both web and mobile, designed to offer convenient dining and shopping experiences. As a one-stop solution, it provides users with access to high-quality services and products. Peaceful Mall offers four primary services: food delivery, food supplier connection, an e-commerce platform, and a social hub.           </Typography>
        <Box mt={2}>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Technologies:
          </Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>Nextjs and React Native
          </Typography>
        </Box>

        <Box mt={2}>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://www.peacefulmall.com", "_blank")}
          >
            View Website
          </Button>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://apps.apple.com/ca/app/peaceful-mall/id1589739390", "_blank")}
          >
            View on apple app store
          </Button>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.peacefulmall.app", "_blank")}
          >
            View on google play
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
        <Grid xs={12} md={6}>
          <img src={peacefulRestaurant} style={{ height: 400, bottom: 0, marginLeft: -20 }} />
        </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
        <Grid xs={12} md={6}>
          <img src={peacefulRestaurant} style={{ height: 550, bottom: 0 }} />
        </Grid>
      </Hidden>

      {/* <Typography variant='h6' style={{ marginTop: 10 }}>
        Screenshots:
      </Typography>
      <div>
        {scsreenshots.map((item) => {
          return (
            <img src={item.src} style={{ objectFit: 'contain', width: item.width, margin: 5 }}
              onClick={() => {
                setOpenModal(true)
                setModalImg(item.src)
              }} />
          )
        })}
      </div> */}

    </Grid>
  )
}
export default PeacefulMall