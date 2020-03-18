import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import letMeOrderPic from '../images/letMeOrder.png'
import screenshot1 from '../images/selforder1.png'
import screenshot2 from '../images/selforder2.png'
import screenshot3 from '../images/selforder3.png'
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
        <ModalPic open={openModal} close={handleClose} modalImg={modalImg}/>

      <Grid xs={12} md={6}>
        <Typography variant='h3' style={{ marginTop: 20 }}>
          LetMe
      </Typography>
        <Typography variant='body2' style={{ marginTop: 10,  }}>
          LetMe Order is a restaurant self ordering system that allows customers to order their food together (not alone)! I have already convinced 2 Restaurants to use the app. This app aims for restaurants that serve many items for a table, such as Chinese dim sum restaurants, Japanese sushi restaurants, and hotpot restaurants etc. The system has a very low setup cost and it allows every customer at the same table to place orders together from their own mobile phones. Customers can see updates in real-time and in-app services request functions. It also comes with kitchen side interface and control panel to manage orders and items.
      </Typography>

      <Box mt={2}>
        <Typography variant='h6' style={{ marginTop: 10 }}>
          Technologies:
          </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>React + MeteorJS + MongoDB + Samentic UI
      </Typography>
      </Box>

      <Box mt={2}>
        <Button variant="outlined" color="primary"  style={{marginRight: 20, marginTop: 20}}
          onClick={()=> window.open("http://159.203.43.46", "_blank")}
          >
          Customer view demo
        </Button>

        <Button variant="outlined" color="primary"  style={{marginRight: 20, marginTop: 20}}
          onClick={()=> window.open("http://159.203.43.46/menu-control", "_blank")}
        >
        Admin view demo
        </Button>

        <Button startIcon={<i class="fa fa-github" aria-hidden="true" />} 
        style={{marginRight: 20, marginTop: 20}}
        onClick={()=> window.open("https://github.com/fyeung21/self-order", "_blank")}
        >
          Source code
          </Button>
        </Box>
      </Grid>
      {/* XS only */}
      <Hidden smUp>
      <Grid xs={12} md={6}>
        <img src={letMeOrderPic} style={{ height: 300, bottom: 0, marginLeft: -30 }} />
      </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
      <Grid xs={12} md={6}>
        <img src={letMeOrderPic} style={{ height: 450, bottom: 0 }} />
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
export default LetMeOrder