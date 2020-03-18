import React, { useEffect, useState } from "react"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {ads} from './data'
import {mgz} from './data'
import {arts} from './data'

const Graphics = () => {
  return (

    <div>
      {/* ---------------Print Ads ---------------- */}

      <Box mt={20} style={{ color: '#9c9c9c' }}>
        <Typography variant='h2'>
          Print Ads:
</Typography>
      </Box>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {ads.map(item => {
          return (
            <Grid xs={12} md={12}>
              <img src={item.src} style={{ height: '99.5%', width: '99.8%', marginTop: -4, objectFit: 'scale-down' }} />
            </Grid>
          )
        })}
      </Grid>


      {/* --------------- Magazine ---------------- */}

      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      {/* '#9c9c9c' */}
      <Box mt={8} style={{ color: 'white' }}>
        <Typography variant='h2' >
          Magazine Layout
</Typography>
        <hr />

      </Box>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {mgz.map(item => {
          return (
            <Grid xs={12} md={12}>
              <img src={item.src} style={{ height: '99.5%', width: '99.8%', marginTop: -4, objectFit: 'scale-down' }} />
            </Grid>
          )
        })}
      </Grid>

      {/* --------------- Magazine ---------------- */}

      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />

      <Box mt={8} style={{ color: 'white' }}>
        <Typography variant='h2' >
          Creative Hobbies
</Typography>
        <hr />

      </Box>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {arts.map(item => {
          return (
            <Grid xs={12} md={12}>
              <img src={item.src} style={{ height: '99.5%', width: '99.8%', marginTop: -4, objectFit: 'scale-down' }} />
            </Grid>
          )
        })}
      </Grid>
    </div>)
}
export default Graphics