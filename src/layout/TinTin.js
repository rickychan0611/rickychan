import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import letMeOrderPic from '../images/letMeOrder.png'
import tintin from '../images/tintin.png'
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

const LetMeOrder = () => {
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
          Tin Tin Food Wholesale E-shop
      </Typography>
        <Typography variant='body2' style={{ marginTop: 10, }}>
          Tin Tin Food Wholesale E-shop is an e-commerce platform that was built using React Native Web. It is available for Web, Android, and IOS which saves a lot of development time and cost. The app offers a great shopping experience to customers as well as great features for the seller. It also features a membership QR code scanning system and best route generator for delivery drivers.      </Typography>

        <Box mt={2}>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Technologies:
          </Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>React Native Web + Nextjs + FireStore + React Native Paper
      </Typography>
        </Box>

        <Box mt={2}>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://tintinfood.ca", "_blank")}
          >
            View demo
        </Button>

          <Button startIcon={<i class="fa fa-github" aria-hidden="true" />}
            style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://github.com/rickychan0611/nexpo-nav", "_blank")}
          >
            Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
        <Grid xs={12} md={6}>
          <img src={tintin} style={{ height: 300, bottom: 0, marginLeft: -30 }} />
        </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
        <Grid xs={12} md={6}>
          <img src={tintin} style={{ height: 450, bottom: 0 }} />
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
export default LetMeOrder