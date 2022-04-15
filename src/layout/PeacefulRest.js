import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import peacefulRestaurant from '../images/peacefulRestaurant.png'
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

const PeacefulRest = () => {
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
          Peaceful Restaurant Online Order
        </Typography>
        <Typography variant='body2' style={{ marginTop: 10, }}>
          Peaceful Restaurant is a famous chinese restaurant located in greater Vancouver. It has 7 locations. 
          The website includes a custom made shopping cart system that were build from scratch. It allows customers to place their online. The orders will be sent directly to their POS system.
        </Typography>
        <Box mt={2}>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Technologies:
          </Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>React + Nextjs + Samentic UI
          </Typography>
        </Box>

        <Box mt={2}>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://www.peacefulrestaurant.com", "_blank")}
          >
            View Website
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
        <Grid xs={12} md={6}>
          <img src={peacefulRestaurant} style={{ height: 300, bottom: 0, marginLeft: -30 }} />
        </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
        <Grid xs={12} md={6}>
          <img src={peacefulRestaurant} style={{ height: 450, bottom: 0 }} />
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
export default PeacefulRest