import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import alphaPay from '../images/alphaPay.png'
import screenshot1 from '../images/r10-1.png'
import screenshot2 from '../images/r10-2.png'
import screenshot3 from '../images/r10-3.png'
import screenshot4 from '../images/r10-4.png'
import screenshot5 from '../images/r10-5.png'
import screenshot6 from '../images/r10-6.png'
import ModalPic from '../components/ModalPic'

const scsreenshots = [
  { src: screenshot1, width: 50 },
  { src: screenshot2, width: 50 },
  { src: screenshot3, width: 50 },
  { src: screenshot4, width: 50 },
  { src: screenshot5, width: 50 },
  { src: screenshot6, width: 50 },
]

const AlphaPay = () => {
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
          AlphaPay
      </Typography>
        <Typography variant='body2' style={{ marginTop: 10, }}>
          By installing this app to a Credit Card POS terminal, it will allow merchants to accept payments from customers who use WeChatPay, AliPay, and UnionPay as their payment method. Customers can make payments by simply scan a QR code which is displayed on the terminal with their phone. The app also features full merchant admin functions such as refund and transaction reports.
      </Typography>


        <Box mt={2}>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Technologies:
          </Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>
            React
    </Typography>
        </Box>
        <Box mt={2}>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://www.youtube.com/watch?v=zZjdarImTm8", "_blank")}
          >
            Video Demo
        </Button>
          {/* <Button startIcon={<i class="fa fa-github" aria-hidden="true" />}
            style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://github.com/redacademy/larivo-WS2-2019", "_blank")}
          >
            Source code
          </Button> */}
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
        <Grid xs={12} md={6}>
          <img src={alphaPay} style={{ height: 400, bottom: 0, marginLeft: -30, marginLeft: 150 }} />
        </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
        <Grid xs={12} md={6}>
          <img src={alphaPay} style={{ height: 450, bottom: 0 }} />
        </Grid>
      </Hidden>

    </Grid>
  )
}
export default AlphaPay