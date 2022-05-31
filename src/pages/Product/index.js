import { useEffect, React } from 'react';
import axios from 'axios';
import { useState } from 'react';
import gif from '../../assets/gif/gif.png'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Category from '../Category';
import ProductItems from './ProductItems';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductSuccess, categoryFilter } from '../../redux/products/action';
import { productRemaining } from '../../redux/products/selectors';
import { categoriesData } from '../Category/Constants';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 380,
    maxHeight: 380,
  },
}));



export default function Product() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const categories = categoriesData;
  const products = useSelector(productRemaining);


  // get Products
  useEffect(() => {
    async function getEvents() {
      setLoading(true);
      axios.get("https://62958d0375c34f1f3b1c3d6d.mockapi.io/food")
          .then(response => response.data)
          .then((data) => {
              dispatch(fetchAllProductSuccess(data));
              setLoading(false);
          });
    }
    getEvents();
  }, [dispatch]); 


  function handleCategoryChange(category)
  {
    dispatch(categoryFilter(category));
  }
  return (
    <div>
        {loading ?     
        <Grid   
          item
          xs={12}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          >
            <img className={classes.image} src={gif} alt='gif' />
        </Grid>
          :(
            <div>
              <Category categories={categories} handleCategoryChange={handleCategoryChange} />
              <ProductItems data={products} />
            </div>
          )
        }
    </div>
  )
}
