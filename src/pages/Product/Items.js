import { React, useEffect, } from 'react';
import { useStyles } from './Constants';
import Grid from '@material-ui/core/Grid';
import { CardMedia, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { cartAdd, cartQty } from '../../redux/cart/actions';
import { useCheckbox } from '../../hooks/input.hooks';
import { useSnackbar } from 'notistack';


export default function Items(props) {
  const { id, title, price, picture} = props;
  const { enqueueSnackbar } = useSnackbar();
  const { carts } = useSelector((state)=> state.cartReducer);
  const { value: inCart, setValue: setInCart } = useCheckbox(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=> {
    setInCart(carts.some(cart => cart.id === id));
  }, [carts, id, setInCart]);
  function handleAddtoCart(data)
  {
    if(inCart)
    {
      enqueueSnackbar('This product is in cart', {variant: 'warning'});
      dispatch(cartQty(id));
    }
    else
    {
      dispatch(cartAdd({
        ...data,
        qty: 1,
      }));
      enqueueSnackbar('Add successfully', {variant: 'success'});
    }
  }
  return (
    <Grid xs item>
        <Button onClick={() => handleAddtoCart(props)} className={classes.image}>
          <CardMedia
          className={classes.image}         
          component="img"
          image={picture}
          alt="Paella dish" />
        </Button>
        <Grid xs item style={{ marginLeft: 10}}>
            <span className={classes.title}>{title}</span>
            <Typography className={classes.dollar}>{price}$</Typography>
        </Grid>
    </Grid>
  )
}
