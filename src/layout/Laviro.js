import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import LaviroPic from '../images/Larivo.png'
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

const Laviro = () => {
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
        Laviro
      </Typography>
        <Typography variant='body1' style={{ marginTop: 10,  }}>
        Larivo Stories is an app that will act as a safe space for young people to share stories, find resources, and be part of a community fighting the stigma around mental health while improving their mental well being. 
        Users will be able to read, record, write and listen to stories from others’ personal experiences in the mental health space.
        Access to resources from partners in the community, relevant to the users (and the stories they come across). Wouldn't be replacing counselling.
</Typography>


      <Box mt={2}>
        <Typography variant='h6' style={{ marginTop: 10 }}>
          Technologies:
          </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>
        React-Native + Prisma + GraphQL
    </Typography>
      </Box>
      <Box mt={2}>
      <Typography variant='body1' style={{ marginTop: 10,  }}>
          In progress... Not deployed
        </Typography>
        <Button variant="outlined" color="primary"  style={{marginRight: 20, marginTop: 20}}
          onClick={()=> window.open("https://victorjianto947951.invisionapp.com/overview/Larivo-ck45140ot05ic01fagwc55d34/screens?v=0FgReF6URd8yz62HY5uHDg%3D%3D&linkshare=urlcopied", "_blank")}
          >
          InVision Prototype
        </Button>
       <Button startIcon={<i class="fa fa-github" aria-hidden="true" />} 
        style={{marginRight: 20, marginTop: 20}}
        onClick={()=> window.open("https://github.com/redacademy/larivo-WS2-2019", "_blank")}
        >
          Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
      <Grid xs={12} md={6}>
        <img src={LaviroPic} style={{ height: 400, bottom: 0, marginLeft: -30 }} />
      </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
      <Grid xs={12} md={6}>
        <img src={LaviroPic} style={{ height: 450, bottom: 0 }} />
      </Grid>
      </Hidden>

    </Grid>
  )
}
export default Laviro