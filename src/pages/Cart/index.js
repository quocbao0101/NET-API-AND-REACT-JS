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
import Slider from '@material-ui/core/Slider';
import { Typography  } from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useSnackbar } from 'notistack';



export default function Cart() {
    const { carts } = useSelector((state)=> state.cartReducer);
    const dispatch = useDispatch();

    const [distance, setDistance] = useState(5);
    const [minutes, setMinutes] = useState('10 - 20');
    const [moneyShip, setMoneyShip] = useState(2);
    const { enqueueSnackbar } = useSnackbar();

    const onChangeDistance = (event, value) => 
    {
        if(value >= 0 && value < 3)
        {
            setMinutes('5 - 10');
            setMoneyShip(1);
        }
        else if(3 <= value && value < 7)
        {
            setMinutes('10 - 20');
            setMoneyShip(2);
        }
        else
        {
            setMinutes('20 - 30');
            setMoneyShip(5);
        }
        setDistance(value);
    }
    const total = carts.reduce((prev, item) => { 
        return prev + item.price * item.qty;
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
        enqueueSnackbar('Updated successfully', {variant: 'success'});
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
                <Grid xs item container className={classes.box}>
                    <Grid xs={3} md={3} lg={3} item container alignContent='center'>
                        <span className={classes.text}>Distance: </span>
                    </Grid>
                    <Grid xs={9} md={9} lg={9} item container>
                        <Slider 
                            style={{ marginLeft: 15,width: '87%'}}
                            valueLabelDisplay="auto" 
                            value={distance}
                            onChange={onChangeDistance}
                            min={0}
                            max={10}
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} item container className={classes.box}>
                    <Grid xs={5} xl={5} lg={5} item container>
                        <Grid xs item 
                        className={classes.boxLocation}
                        container 
                        justifyContent='center'
                        alignContent='center'>
                            <PersonPinIcon />
                        </Grid>
                    </Grid>
                    <Grid xs={5} xl={5} lg={5} item>
                        <Typography style={{marginLeft: 20, marginTop: 10, fontWeight: 700}}>Delivery</Typography>
                        <Typography style={{ marginLeft: 20,fontWeight: 600, color: '#F8B809'}}>{minutes} min</Typography>
                    </Grid>
                    <Grid xs={2} xl={2} lg={2} item container alignContent='center'>
                        <span style={{color: '#BFBFBF'}}>{moneyShip}$</span>
                    </Grid>
                </Grid>
                <Grid xs item className={classes.box} container style={{ marginTop: 30}}>
                    <Grid xs={10} md={10} lg={10} item container alignContent='center'>
                        <span className={classes.text}>Total Amount:</span>
                    </Grid>
                    <Grid xs={2} md={2} lg={2} item container  alignContent='center'>
                        <span className={classes.text}>{total + moneyShip}$</span>
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
