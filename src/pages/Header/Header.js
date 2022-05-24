import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Menu } from '@material-ui/icons';
import { ShoppingCart } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useStyles } from './Constants';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';



export default function Header() {
  const classes = useStyles();
  const [isOpenDrawer , setIsOpenDrawer] = useState(false);

  return (
    <div>
      <AppBar position="static" className={classes.appbar} elevation={0}>
          <Grid item container>
            <Grid xs={4} md={4} xl={4} item container>
              <Box>
                <Button className={classes.menu} ><Menu /></Button>
              </Box>
              <Box className={classes.title}>
                <span className={classes.text}>
                  Order
                </span>
                <span className={classes.something}>
                  something
                </span>
              </Box>
            </Grid>
            <Grid xs={4} md={4} xl={4} item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid xs={4} md={4} xl={4} item spacing={2} container justifyContent='flex-end'>
              <Grid item>
                <Button onClick={() => setIsOpenDrawer(true)} className={classes.iconCart}><ShoppingCart /></Button>
                <SwipeableDrawer
                    anchor='right'
                    open={isOpenDrawer}
                    onClose={() => setIsOpenDrawer(false)}
                    onOpen={() => setIsOpenDrawer(true)}
                >
                    <Box p={2} width='250px' textAlign='center'>
                        <h2>Hello World</h2>
                    </Box>
                </SwipeableDrawer>
              </Grid>
              <Grid item>
                <Button className={classes.iconCart}><PermIdentityIcon /></Button>
              </Grid>
            </Grid>
          </Grid>
      </AppBar>
    </div>
  );
}
