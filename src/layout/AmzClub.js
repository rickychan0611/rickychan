import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import AmzClubPic from '../images/AmzClub.png'
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

const AmzClub = () => {
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
        Amazon Club
      </Typography>
        <Typography variant='body2' style={{ marginTop: 10,  }}>
        Amazon Club is a platform connects Amazon's sellers and reviewers. It was launched to public in June 2019. Now has 500+ active members. Sellers can post their products and seek for reviewers who are interested in reviewing their products by offering discounts. Reviewers can also easily find products that are available for discount. They can manage their review submissions all in one place.      </Typography>

      <Box mt={2}>
        <Typography variant='h6' style={{ marginTop: 10 }}>
          Technologies:
          </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>Vue.js + Firebase + Vuetify
      </Typography>
      </Box>

      <Box mt={2}>
        <Button variant="outlined" color="primary"  style={{marginRight: 20, marginTop: 20}}
          onClick={()=> window.open("https://www.amz-club.com/", "_blank")}
          >
          Live View
        </Button>

       <Button startIcon={<i class="fa fa-github" aria-hidden="true" />} 
        style={{marginRight: 20, marginTop: 20}}
        onClick={()=> window.open("https://github.com/rickychan0611/amz-club", "_blank")}
        >
          Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
      <Grid xs={12} md={6}>
        <img src={AmzClubPic} style={{ height: 300, bottom: 0, marginLeft: -30 }} />
      </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
      <Grid xs={12} md={6}>
        <img src={AmzClubPic} style={{ height: 450, bottom: 0 }} />
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
export default AmzClub