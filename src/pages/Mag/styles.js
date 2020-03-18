import { makeStyles } from '@material-ui/core/styles';
import background from '../../images/background.png'
import building from '../../images/building.png'
import buildingBW from '../../images/building-BW.png'
import bokeh1 from '../../images/bokeh1.png'

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: '100vw'
  },
  parallax: {
    backgroundColor: 'black',
    background: `url(${background})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'right top',
    display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
    // paddingRight: 30,
    // overflow: 'scroll'

  },
  myNameLayer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',

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
  },
 
});

export default useStyles