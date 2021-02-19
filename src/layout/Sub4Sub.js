import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import BoomTownPic from '../images/sub4sub-mon.png'
import screenshot1 from '../images/sub4sub1.png'
import screenshot2 from '../images/sub4sub2.png'
import screenshot3 from '../images/sub4sub3.png'
import ModalPic from '../components/ModalPic'

const scsreenshots = [
  { src: screenshot1, width: 110 },
  { src: screenshot2, width: 110 },
  { src: screenshot3, width: 110 }
]

const Sub4Sub = () => {
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
          Youtube Auto Sub4Sub
      </Typography>
        <Typography variant='body2' style={{ marginTop: 10, }}>
          Auto Sub4Sub is a Youtube automatic subscription system that users can play each other's videos and subscribe to their Youtube channels automatically. This is a hobby project. I wanted to try to use Javascript to build a desktop app using ElectronJS.
          </Typography>


        <Box mt={2}>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Technologies:
          </Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>
            React + ElectronJS
    </Typography>
        </Box>

        <Box mt={2}>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://youtu.be/BD2wkFtTfH8", "_blank")}
          >
            Video Demo
        </Button>

          <Button startIcon={<i class="fa fa-github" aria-hidden="true" />}
            style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://github.com/rickychan0611/sub-4-sub", "_blank")}
          >
            Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
        <Grid xs={12} md={6}>
          <img src={BoomTownPic} style={{ height: 300, bottom: 0, marginLeft: -10 }} />
        </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
        <Grid xs={12} md={6}>
          <img src={BoomTownPic} style={{ height: 450, bottom: 0 }} />
        </Grid>
      </Hidden>

      <Typography variant='h6' style={{ marginTop: 10 }}>
        Screenshots:
      </Typography><div>
        {scsreenshots.map((item) => {
          return (
            <img src={item.src} style={{ objectFit: 'contain', width: item.width, margin: 5 }}
              onClick={() => {
                setOpenModal(true)
                setModalImg(item.src)
              }} />
          )
        })}
      </div>

    </Grid>
  )
}
export default Sub4Sub