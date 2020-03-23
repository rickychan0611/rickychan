import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const Footer = () => {

  return (
    <div style={{ color: 'white', width: '90vw' }}>

      <Typography variant='h1'>
        <br />Ricky Chan<span style={{ color: 'red' }}>.</span>
      </Typography>
      <Box mt={10}>
        <Typography variant='h3' style={{ marginTop: 10 }}>
          Full Stack Developer & <br />Grahpic Designer
      </Typography>
      </Box>
      <Typography variant='h4' style={{ marginTop: 10 }}>
        <Box mt={5}>
          Email: ric0611@gmail.com
      </Box>
      <Box>
          Tel: 604.765.1390
      </Box>
      </Typography>

    </div>
  )
}

export default Footer
