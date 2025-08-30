import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import pomchat from '../images/pomchat-app.png'
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
          PomChat - 1-on-1 Video Chat
        </Typography>
        <Typography variant='body2' style={{ marginTop: 10, }}>
        PomChat is a real-time video chat platform built with React, TypeScript, and Firebase, designed to connect users with hosts through 1-on-1 and group video sessions. It integrates Agora for low-latency video streaming and Easemob for seamless private messaging and chatroom functionality. The platform features animated gifting, an in-app token system, and real-time AI translation to support a multilingual audience. A unique aspect of PomChat is its AI-powered host avatars, which allow users to chat with a virtual version of the host even when the real host is offline, enhancing engagement and retention. It highlights strong front-end architecture and experience in building responsive, interactive, and monetized web applications.
        </Typography>
        <Box mt={2}>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Technologies:
          </Typography>
          <Typography variant='body1' style={{ marginTop: 10 }}>
            React + TypeScript + Agora + Easemob
          </Typography>
        </Box>

        <Box mt={2}>
          <Button variant="outlined" color="primary" style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => window.open("https://pomchat.live/invite/fb", "_blank")}
          >
            View Web App
          </Button>
        </Box>
        <Typography variant='body2' style={{ marginTop: 10, fontStyle: 'italic', color: 'red' }}>
          Note: This project contains NSFW content and is intended for 18+ audiences only.
        </Typography>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
        <Grid xs={12} md={6}>
          <img src={pomchat} style={{ height: 400, bottom: 0, marginLeft: -20 }} />
        </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
        <Grid xs={12} md={6}>
          <img src={pomchat} style={{ height: 550, bottom: 0 }} />
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