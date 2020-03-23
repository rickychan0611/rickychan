
import { makeStyles } from '@material-ui/core/styles'
import background from '../../images/background.png'

const useStyles = makeStyles({
homeContainer: {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  maxWidth: 1100,
  backgroundImage: `url(${background})`,
  // overflow: 'hidden',

  },
parallax: {
  backgroundColor: 'black',
  // display: 'flex',
  // justifyContent: 'center',
  backgroundImage: `url(${background})`,
  backgroundSize: 'auto 100%',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'right top',
  // display: 'flex',
  // paddingRight: 30,
  // overflow: 'auto',
  color: 'white',
  // height: '100vh',
  // maxWidth: 1100
},
aboutMeBackground : {
  background: 'linear-gradient(to bottom right, #2e343d, #000000)',
  // height: 1000
},
myPicLayer: {
  display: 'flex',
  maxWidth: 1012,
  alignItems: 'center',
  justifyContent: 'flex-start',
},
myTextLayer: {
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'flex-end',
  maxWidth: 1012,
},
myNameLayer: {
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 1012
},
myWorksLayer: {
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'start',
  maxWidth: 1012
}
})

export default useStyles