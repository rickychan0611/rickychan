import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import letMeOrderPic from '../images/letMeOrder.png'


const LetMeOrder = () => {
  return (
      <Grid container mr={2}>
      <Grid xs={12} md={6}>
        <Typography variant='h3' style={{ marginTop: 20 }}>
          LetMe Order
      </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>
          LetMe Order is a restaurant self ordering system that allows customers to order their food together! This app aims for restaurants that serve many items for a table, such as Chinese dim sum restaurants, Japanese sushi restaurants, and hotpot restaurants. The system has a very low setup cost and it allows every customer at the same table to place orders together from their own mobile phones. Customers can see updates in real-time and in-app services request functions. It also comes with kitchen side interface and control panel to manage orders and items.
      </Typography>

      <Box mt={6}>
        <Typography variant='h6' style={{ marginTop: 10 }}>
          Technologies:
          </Typography>
        <Typography variant='body1' style={{ marginTop: 10 }}>React + MeteorJS + MongoDB + Samentic UI
      </Typography>
      </Box>

      <Box mt={6}>
        <Button variant="outlined" color="primary"  style={{marginRight: 20, marginTop: 20}}>
          Customer view demo
        </Button>

        <Button variant="outlined" color="primary"  style={{marginRight: 20, marginTop: 20}}>
        Admin view demo
        </Button>

        <Button startIcon={<i class="fa fa-github" aria-hidden="true" />} style={{marginRight: 20, marginTop: 20}}>
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
export default LetMeOrder