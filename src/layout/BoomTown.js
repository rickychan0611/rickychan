import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import BoomTownPic from '../images/BoomTown.png'
import screenshot1 from '../images/boomtown1.png'
import screenshot2 from '../images/boomtown2.PNG'
import screenshot3 from '../images/boomtown3.PNG'
import screenshot4 from '../images/boomtown4.png'
import screenshot5 from '../images/boomtown5.png'
import ModalPic from '../components/ModalPic'

const scsreenshots = [
  { src: screenshot1, width: 130 },
  { src: screenshot2, width: 130 },
  { src: screenshot3, width: 130 },
  { src: screenshot4, width: 130 },
  { src: screenshot5, width: 130 },
]

const BoomTown = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleClose = () => {
      setOpenModal(false);
    };

    const [modalImg, setModalImg] = useState('')

    return (
      <Grid container mr={2}>
              <ModalPic open={openModal} close={handleClose} modalImg={modalImg}/>

      <Grid xs={12} md={6}>
        <Typography variant='h3' style={{ marginTop: 20 }}>
        Boom Town
      </Typography>
        <Typography variant='body1' style={{ marginTop: 10,  }}>
        Share, Borrow and Prosper. Boom Town is a full-stack website for sharing and borrowing different items. Users can upload an image, give it a description, choose appropriate tags and share it!
      </Typography>


      <Box mt={2}>
        <Typography variant='h6' style={{ marginTop: 10 }}>
          Technologies:
          </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>
        React + Express + GraphQL/Apollo + PostgresSQL + Material UI
    </Typography>
      </Box>

      <Box mt={2}>
        <Button variant="outlined" color="primary"  style={{marginRight: 20, marginTop: 20}}
          onClick={()=> window.open("https://boom.academy.red/", "_blank")}
          >
          Live View
        </Button>

       <Button startIcon={<i class="fa fa-github" aria-hidden="true" />} 
        style={{marginRight: 20, marginTop: 20}}
        onClick={()=> window.open("https://github.com/rickychan0611/Boomtown-final", "_blank")}
        >
          Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
      <Grid xs={12} md={6}>
        <img src={BoomTownPic} style={{ height: 400, bottom: 0, marginLeft: -30 }} />
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
      {scsreenshots.map((item)=>{
        return (
          <img src={item.src} style={{ objectFit: 'contain', width:item.width, margin:10}}
            onClick={()=>{
              setOpenModal(true)
              setModalImg(item.src)
            }}/>
        )
      })}
      </div>

    </Grid>
  )
}
export default BoomTown