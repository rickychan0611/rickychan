import { makeStyles } from '@material-ui/core/styles';
import background from '../images/background.png'
import building from '../images/building.png'
import buildingBW from '../images/building-BW.png'
import bokeh1 from '../images/bokeh1.png'
import bokeh2 from '../images/bokeh2.png'
import ricky from '../images/ricky.png'
import restApp from '../images/restApp.png'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: 0,
    outline: 'none'
  },
  parallax: {
    backgroundColor: 'black',
    background: `url(${background})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right top',
    display: 'flex',
    paddingRight: 30
  },
  myName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buildings: {
    background: `url(${buildingBW})`,
    // backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
  },
  buildingLight: {
    backgroundImage: `url(${bokeh1})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    mixBlendMode: 'color-dodge',
  },
  aboutMeBackground : {
    background: 'linear-gradient(to bottom right, #2e343d, #000000)'
  }
});

export default useStyles