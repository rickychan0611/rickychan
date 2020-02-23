import React from 'react'
import Box from '@material-ui/core/Box';

const Body = ({text, color}) => (
    <Box fontWeight="fontWeightLight" fontSize={20} letterSpacing={2} mt={2} color={color}>
        {text}
    </Box>
)

export default Body