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
  const [categories, setCategories] = useState([]);
  const products = useSelector(productRemaining);

  const [activeKey, setActiveKey] = useState("");


  // get Category
  useEffect(() => {
    async function getEvents() {
      setLoading(true);
      axios.get("https://localhost:44388/category")
          .then(response => response.data)
          .then((data) => {
              setCategories(data);
              setLoading(false);
          });
    }
    getEvents();
  }, [dispatch]); 

  // get Products
  useEffect(() => {
    async function getEvents() {
      setLoading(true);
      axios.get("https://localhost:44388/food")
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
    if (activeKey === category) {
      setActiveKey("");
    } else {
      setActiveKey(category);
    }
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
              <Category categories={categories} handleCategoryChange={handleCategoryChange} activeKey={activeKey} />
              <ProductItems data={products} />
            </div>
          )
        }
    </div>
  )
}
