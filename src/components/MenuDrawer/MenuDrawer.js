import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h4 style={{ marginLeft: 10 }}>My works</h4>
        <Link to="/app-dev" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <ListItem button>
            <ListItemText primary='App Development' />
          </ListItem>
        </Link>
        <Link to="/magazine" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <ListItem button>
            <ListItemText primary='Magazine Desgin' />
          </ListItem>
        </Link>
        <Link to="/ads" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <ListItem button>
            <ListItemText primary='Print Ads Design' />
          </ListItem>
        </Link>
        <Link to="/menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <ListItem button>
            <ListItemText primary='Restaurant Menu Design' />
          </ListItem>
        </Link>
      </List>

      <Divider />
      <List>
      <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ListItem button>
          <ListItemText primary='Contact me' />
        </ListItem>
        </Link>

        <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ListItem button>
          <ListItemText primary='Back to home' />
        </ListItem>
        </Link>

      </List>
    </div>
  );

  return (
    <div>
      <Button 
        variant="outlined" 
        size="medium" 
        onClick={toggleDrawer('left', true)} 
        style={{ 
          backgroundColor: 'white', 
          color: '#333',
          borderColor: '#ccc'
        }}
      >
        <MenuIcon style={{ marginRight: 5 }} /> Menu
      </Button>
      <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
}
