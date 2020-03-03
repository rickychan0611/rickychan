import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import letMeOrderPic from '../images/letMeOrder.png'


const R10 = () => {
  return (
      <Grid container mr={2}>
      <Grid xs={12} md={6}>
        <Typography variant='h3' style={{ marginTop: 20 }}>
        R10 | Conference App
      </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>
        Cross platform app that helps companies manage their schedule when they have a conference going on. Available on iOS and Android.</Typography>
      <Box mt={6}>
        <Typography variant='h6' style={{ marginTop: 10 }}>
          Technologies:
          </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>React-Native + GraphQL
      </Typography>
      </Box>

      <Box mt={6}>
      <Typography variant='body1' style={{ marginTop: 10 }}>
        Not deployed
      </Typography>


        <Button 
          startIcon={<i class="fa fa-github" aria-hidden="true" />} 
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
        <img src={letMeOrderPic} style={{ height: 400, bottom: 0, marginLeft: -30 }} />
      </Grid>
      </Hidden>

      {/* >XS */}
      <Hidden xsDown>
      <Grid xs={12} md={6}>
        <img src={letMeOrderPic} style={{ height: 500, bottom: 0 }} />
      </Grid>
      </Hidden>

      </Grid>
  )
}
export default R10