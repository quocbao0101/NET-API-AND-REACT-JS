import { React, useEffect, useState, } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './Constants';
import EditIcon from '@material-ui/icons/Edit';
import CartItems from './CartItems';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { cartClear } from '../../redux/cart/actions';
import IconButton from '@material-ui/core/IconButton';



export default function Cart() {
    const { carts } = useSelector((state)=> state.cartReducer);
    const dispatch = useDispatch();

    const total = carts.reduce((prev, item) => { 
        return prev + item.dollar * item.qty;
    }, 0 );
    const [emptyCart, setEmptyCart] = useState(true);
    useEffect(() => {
        if(carts.length <= 0)
        {
            setEmptyCart(false);
        }
        else
        {
            setEmptyCart(true);
        }
      }, [carts]); 
    const classes = useStyles();

    function handleonCheckout()
    {
        dispatch(cartClear());
    }

    const [edit , setEdit] = useState(false);
    return (
        <Grid className={classes.menu}>
            {emptyCart ? (
            <>
                <Grid xs item className={classes.box} container>
                    <Grid xs={10} md={10} lg={10} item container alignContent='center'>
                        <span className={classes.text}>My Order</span>
                    </Grid>
                    <Grid xs={2} md={2} lg={2} item container alignContent='center'>
                        <IconButton onClick={() => setEdit(!edit)}><EditIcon /></IconButton>
                    </Grid>
                </Grid>
                <Grid xs item className={classes.box} container spacing={2}>
                    {carts.map(cart => (<CartItems edit={edit} key={cart.id} carts ={cart} />))}
                    <Divider style={{width:'95%',marginTop: 30}} />
                </Grid>
                <Grid xs item className={classes.box} container style={{ marginTop: 30}}>
                    <Grid xs={9} md={9} lg={9} item container alignContent='center'>
                        <span className={classes.text}>Total Amount:</span>
                    </Grid>
                    <Grid xs={3} md={3} lg={3} item container  alignContent='center'>
                        <span className={classes.text}>{total}$</span>
                    </Grid>
                </Grid>
                <Grid xs item className={classes.box} container>
                    <Button onClick={handleonCheckout} className={classes.button}>Checkout</Button>
                </Grid>
            </>) 
            
            :(
                <Grid container xs item justifyContent='center' alignItems='center' style={{ minHeight: '90vh'}}>
                    <span style={{fontWeight: 700}}>There are no items in this cart</span>
                </Grid>)
            }
        </Grid>
    )
}
