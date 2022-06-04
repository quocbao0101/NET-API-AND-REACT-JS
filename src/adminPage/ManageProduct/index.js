import React, { useState } from 'react';
import { useStyles } from './Constants';
import { Backdrop, Grid, TextField } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProduct, removeProduct } from '../../redux/manageproducts/action';
import { useSnackbar } from 'notistack';
import { Modal } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import { useInput, useCheckbox } from '../../hooks/input.hooks';

export default function ManageProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { value: title, onChange: onChangeTitle} = useInput("");
  const { value: price, onChange: onChangePrice} = useInput("");
  const { value: picture, onChange: onChangePicture} = useInput("");
  const { value: category, onChange: onChangeCategory} = useInput("");
  const { value: messErr, setValue: setIsError} = useInput("");
	const { value: error, setValue: setError } = useCheckbox(false);


  const columns = [
    { field: "ID", 
    headerName: "Food Name", 
    width: 250,
    renderCell: (params) => <Typography>{params.row.title}</Typography>,
    flex: 1,
   },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: false,
      renderCell: (params) => <Typography>{params.row.price}$</Typography>,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: false,
      renderCell: (params) => (
        <Typography>{params.row.category}</Typography>
      ),
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      editable: false,
      flex: 1,
      renderCell: (params) => {
        return (
          <img style={{ width: '100%', height: 300}} alt='' src={params.row.picture} />
        );
      },
    },
  ];



  const { products } = useSelector((state)=> state.productManageReducer);

  const [IdCategory, setIdCategory] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);


  const rows = products;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleRemove = () =>
  {
    dispatch(removeProduct(IdCategory));
    IdCategory.map((id) => axios.delete(`https://localhost:44388/food/${id}`));
    if(IdCategory.length > 0)
    {
      enqueueSnackbar('Delete successfully', {variant: 'success'});
    }
    else
    {
      enqueueSnackbar('Please select product', {variant: 'error'});
    }
  }

  const handleAdd = () => {
    setError(false);
    if(!title || 
      !price || 
      !picture || 
      !category || 
      title.trim().length === 0 ||
      price.trim().length === 0 ||
      category.trim().length === 0 ||
      picture.trim().length === 0)
    {
      setError(true);
      setIsError("Please required fields.");
    }
    else
    {
      const idProduct = products[products.length-1].id;
      const id = idProduct + 1;
      const product = {
        id,
        title,
        price,
        picture,
        category
      }
      axios.post('https://localhost:44388/food', product);
      dispatch(addProduct(product));
      enqueueSnackbar('Add successfully', {variant: 'success'});
      setOpen(false);
      window.location.reload()
    }
  }

  useEffect(() => {
    async function getEvents() {
      setLoading(true);
      axios.get("https://localhost:44388/food")
          .then(response => response.data)
          .then((data) => {
              dispatch(fetchProduct(data));
              setLoading(false);
          });
    }
    getEvents();
  }, [dispatch]); 

  return (
    <Grid xs item container justifyContent='center' style={{ marginTop: 200}}>
        <div style={{ height: 371, width: '80%' }}>
                <Button variant="outlined" onClick={handleRemove}>
                    Remove Food
                </Button>
                <Button variant="outlined" onClick={handleOpen}>
                    Add Food
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Grid item xs className={classes.modal}>
                      <Typography>
                        ADD FOOD
                      </Typography>

                      <Grid xs item container className={classes.top}>
                        <Grid xs={2} md={2} xl={2} item container alignContent='center'>
                          <Typography variant='h6'>Food name:</Typography>
                        </Grid>
                        <Grid xs={10} md={10} xl={10} item>
                          <TextField value={title} onChange={onChangeTitle} style={{ width: '100%'}} variant='outlined'/>
                        </Grid> 
                      </Grid>

                      <Grid xs item container className={classes.top}>
                        <Grid xs={2} md={2} xl={2} item container alignContent='center'>
                          <Typography variant='h6'>Price:</Typography>
                        </Grid>
                        <Grid xs={10} md={10} xl={10} item>
                          <TextField value={price} onChange={onChangePrice} style={{ width: '100%'}} variant='outlined'/>
                        </Grid> 
                      </Grid>

                      <Grid xs item container className={classes.top}>
                        <Grid xs={2} md={2} xl={2} item container alignContent='center'>
                          <Typography variant='h6'>Image Url:</Typography>
                        </Grid>
                        <Grid xs={10} md={10} xl={10} item>
                          <TextField value={picture} onChange={onChangePicture} style={{ width: '100%'}} variant='outlined'/>
                        </Grid> 
                      </Grid>

                      <Grid xs item container className={classes.top}>
                        <Grid xs={2} md={2} xl={2} item container alignContent='center'>
                          <Typography variant='h6'>Category:</Typography>
                        </Grid>
                        <Grid xs={10} md={10} xl={10} item>
                          <TextField value={category} onChange={onChangeCategory} style={{ width: '100%'}} variant='outlined'/>
                        </Grid> 
                      </Grid>

                      <Grid xs item container className={classes.top}>
                        <Grid xs={10} md={10} xl={10} item>
                        </Grid>
                        <Grid xs={2} md={2} xl={2} item>
                          <Button onClick={handleAdd} color='primary' variant="contained" style={{ width: '100%', padding: 10, fontWeight: 700}}>ADD</Button>
                        </Grid> 
                      </Grid>
                      {
                        error && (                      
                      <Grid xs item container className={classes.top}>
                        <Grid xs item>
                          <Typography style={{color: 'red'}}>{messErr}</Typography>
                        </Grid> 
                      </Grid>)
                      }
                    </Grid>
                  </Fade>
                </Modal>
                <DataGrid     
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    loading={loading} 
                    onSelectionModelChange={(newSelection) => setIdCategory(newSelection)}
                />
        </div>
    </Grid>
  );
}