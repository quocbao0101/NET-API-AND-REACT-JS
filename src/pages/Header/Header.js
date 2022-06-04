import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Menu } from '@material-ui/icons';
import { ShoppingCart } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useStyles } from './Constants';

import Cart from '../Cart';
import { useSelector } from 'react-redux';



export default function Header() {
  const classes = useStyles();
  const { carts } = useSelector((state) => state.cartReducer);
  const [isOpenDrawer , setIsOpenDrawer] = useState(false);


  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={0}>
          <Grid item container>
            <Grid xs={8} md={8} xl={8} item container>
              <Grid item xs={3} md={1} xl={1} container alignContent='center'>
                <Button className={classes.menu}  ><Menu /></Button>
              </Grid>
              <Grid item xs={9} md={11} xl={11} container alignContent='center'>
                  <span className={classes.text}>
                    Order something
                  </span>
                  
              </Grid>
            </Grid>
            <Grid xs={4} md={4} xl={4} item spacing={3} alignContent='center' container justifyContent='flex-end'>
              <Grid item >
                <Button onClick={() => setIsOpenDrawer(true)} className={classes.iconCart}>
                  <ShoppingCart />
                  {carts.length > 0 && (                  
                    <Box className={classes.box}>
                      <span className={classes.amountProduct}>{carts.length}</span>
                    </Box>)}
                </Button>
                <SwipeableDrawer
                    anchor='right'
                    open={isOpenDrawer}
                    onClose={() => setIsOpenDrawer(false)}
                    onOpen={() => setIsOpenDrawer(true)}
                >
                  <Cart />
                </SwipeableDrawer>
              </Grid>
            </Grid>
          </Grid>
      </AppBar>
    </div>
  );
}
