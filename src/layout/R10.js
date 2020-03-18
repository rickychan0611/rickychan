import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import R10Pic from '../images/R10.png'
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

const R10 = () => {
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
        R10 | Conference App
      </Typography>
        <Typography variant='body1' style={{ marginTop: 10,  }}>
        Cross platform app that helps companies manage their schedule when they have a conference going on. Available on iOS and Android.
        </Typography>


      <Box mt={2}>
        <Typography variant='h6' style={{ marginTop: 10 }}>
          Technologies:
          </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>
        React-Native + GraphQL
    </Typography>
      </Box>
      <Box mt={2}>
      <Typography variant='body1' style={{ marginTop: 10,  }}>
          Not deployed
        </Typography>

       <Button startIcon={<i class="fa fa-github" aria-hidden="true" />} 
        style={{marginRight: 20, marginTop: 20}}
        onClick={()=> window.open("https://github.com/rickychan0611/R10", "_blank")}
        >
          Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
      <Grid xs={12} md={6}>
        <img src={R10Pic} style={{ height: 300, bottom: 0, marginLeft: -30 }} />
      </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
      <Grid xs={12} md={6}>
        <img src={R10Pic} style={{ height: 450, bottom: 0 }} />
      </Grid>
      </Hidden>

      <Typography variant='h6' style={{ marginTop: 10 }}>
          Screenshots:
      </Typography><div>
      {scsreenshots.map((item)=>{
        return (
          <img src={item.src} style={{ objectFit: 'contain', width:item.width, margin:5}}
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
export default R10