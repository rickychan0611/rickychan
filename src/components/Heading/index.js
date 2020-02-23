import React from 'react'
import Box from '@material-ui/core/Box';

const Heading = ({text, color}) => (
    <Box fontWeight="fontWeightBold" fontSize={150} letterSpacing={-4} lineHeight={1} color={color}>
       {text}
    </Box>
)

export default Heading