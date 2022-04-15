import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import urbanFavor from '../images/urbanFavor.png'
import screenshot1 from '../images/amz1.png'
import screenshot2 from '../images/amz2.png'
import screenshot3 from '../images/amz3.png'
import screenshot4 from '../images/amz4.png'
import screenshot5 from '../images/amz5.png'
import ModalPic from '../components/ModalPic'

const scsreenshots = [
  { src: screenshot1, width: 110 },
  { src: screenshot2, width: 110 },
  { src: screenshot3, width: 50 },
  { src: screenshot4, width: 110 },
  { src: screenshot5, width: 110 }
]

const UrbanFavor = () => {
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
          Urban Favor - Meal sharing
        </Typography>
        <Typography variant='body2' style={{ marginTop: 10, }}>
          Urban Favor is still under development. Urban Favor is a meal-sharing platform. During the Covid-19 pandemic, many people are stuck at home. I see a phenomenon that many of them start to focus on their cooking skills and showing off on social media. This is why I came up with the idea of creating a platform for food provider to showcase their food at the same time, people can enjoy the taste. Users could also request food they liking and see if anyone could make it for them. This platform also has meal provider ranking and meal review. Users can also interact with meal providers by leaving questions on their posts. </Typography>
        <Box mt={2}>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Technologies:
          </Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>React + Firestore + Sementic-UI
          </Typography>
        </Box>

        <Box mt={2}>
          <Button variant="outlined" color="primary" disabled style={{ marginRight: 20, marginTop: 20 }}
            // onClick={() => window.open("https://boom.academy.red/", "_blank")}
          >
            Project is offline
          </Button>
          {/* <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://www.urban-favor.com/", "_blank")}
          >
            Live Demo
        </Button> */}

          <Button startIcon={<i class="fa fa-github" aria-hidden="true" />}
            style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://github.com/rickychan0611/favor-helper", "_blank")}
          >
            Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
        <Grid xs={12} md={6}>
          <img src={urbanFavor} style={{ height: 300, bottom: 0, marginLeft: -30 }} />
        </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
        <Grid xs={12} md={6}>
          <img src={urbanFavor} style={{ height: 450, bottom: 0 }} />
        </Grid>
      </Hidden>

      {/* <Typography variant='h6' style={{ marginTop: 10 }}>
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
      </div> */}

    </Grid>
  )
}
export default UrbanFavor