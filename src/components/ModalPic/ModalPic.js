import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const ModalPic = ( { open, close, modalImg } ) => {
  const classes = useStyles();
  // const [close, setClose] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        disableAutoFocus={true}
        className={classes.modal}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{outline: 'none'}}
      >
        <Fade in={open}>
             <img src={modalImg} style={{ width:'80%', margin:'80%', outline:"none"}}/>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalPic