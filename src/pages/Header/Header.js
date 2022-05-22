import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#000',
  },
  title: {
    flexGrow: 1,
    color: '#000',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#90CAF9',}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Food Order
          </Typography>
          <IconButton><ShoppingCart /></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
