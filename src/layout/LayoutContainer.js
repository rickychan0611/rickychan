import React, { useEffect, useState, Fragment } from "react"
import buildingBW from '../images/building-BW.png'
import bokeh1 from '../images/bokeh1.png'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

import MyName from './MyName'
import Footer from './Footer'
import AboutMe from './AboutMe'
import LetMeOrder from './LetMeOrder'
import AmzClub from './AmzClub'
import BoomTown from './BoomTown'
import R10 from './R10'
import Laviro from './Laviro'
import Hidden from '@material-ui/core/Hidden';
import Graphics from './Graphics'

import GDbg from '../images/GD-bg.png'
import useStyles from './styles'
import code from '../images/codes.png'

import ContainerLg from './ContainerLg'

const LayoutContainer = () => {
  const classes = useStyles();

  return (
    <Fragment>

      {/* <Hidden mdDown> */}
        <ContainerLg/>
      {/* </Hidden> */}

    </Fragment>
 )
}

export default LayoutContainer