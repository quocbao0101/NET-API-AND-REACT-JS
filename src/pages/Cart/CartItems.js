import { React, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './Constants';
import { InputBase } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { cartDelete, cartUpdate } from '../../redux/cart/actions';
import { useSnackbar } from 'notistack';




export default function CartItems(props) {
    const { dollar, qty, src, title, id } = props.carts;
    
    const [quantity, setQuantity] = useState(qty);
    const { edit } = props;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    function handleOnDelete(id)
    {
        dispatch(cartDelete(id));
        enqueueSnackbar('Delete success', {variant: 'success'});
    }
    const handleChange = (event) => {
        if(Number(event.target.value) < 0)
        {
            return event.target.value = 1;
        }
        else if(Number(event.target.value) > 999)
        {
            return event.target.value = 999;
        }
        setQuantity(event.target.value);
        dispatch(cartUpdate({id , qty: event.target.value}));
      };
    const classes = useStyles();
    return (
    <>
        {edit ? (
        <>
            <Grid xs={2} md={2} lg={2} item container alignContent='center'>
                <IconButton onClick={() => handleOnDelete(id)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
            <Grid xs={3} md={3} lg={3} item container alignContent='center'>
                <img className={classes.image} alt='Cart Item' src={src}/>
            </Grid>
            </>)
            : (        
        <Grid xs={5} md={5} lg={5} item container alignContent='center'>
            <img className={classes.imageEdit} alt='Cart Item' src={src}/>
        </Grid>)
            }
        <Grid xs={5} md={5} lg={5} item container alignContent='center'>
            <InputBase
                    className={classes.textInput}
                    value={quantity}
                    disabled={!edit}
                    onChange={handleChange}
                    type='number'
            />
            <span className={classes.space} style={{color: '#BFBFBF'}}>x</span>
            <span className={classes.space} style={{fontWeight: 700}}>{title}</span>
        </Grid>
        <Grid xs={2} md={2} lg={2} item container alignContent='center'>
            <span style={{color: '#BFBFBF'}}>{dollar}$</span>
        </Grid>
    </>
    )
}
