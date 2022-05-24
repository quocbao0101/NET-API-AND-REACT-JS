import { useEffect, React } from 'react';
import axios from 'axios';
import { useState } from 'react';
import gif from '../../assets/gif/gif.png'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Category from '../Category';
import ProductItems from './ProductItems';

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

  const Loading = () => {
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
  }
  
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false);
  function getEvents() {
    axios.get("https://localhost:44388/sinhvien")
        .then(response => response.data)
        .then((data) => {
            setProduct(data);
            setLoading(false);
            console.log(data);
        });
  }
  useEffect(() => {
    getEvents();
  }, []); 

  const example = [{
    id:1,
    title: 'Vo dich',
    src: 'https://cdn.tgdd.vn/2020/10/CookRecipe/Avatar/salad-ot-chuong-thit-ga-thumbnail.jpg',
  },
  {
    id:2,
    title: 'Vo dich 2',
    src: 'https://cdn.tgdd.vn/2020/10/CookRecipe/Avatar/salad-ot-chuong-thit-ga-thumbnail.jpg',
  },
  {
    id:3,
    title: 'Vo dich 3',
    src: 'https://cdn.tgdd.vn/2020/10/CookRecipe/Avatar/salad-ot-chuong-thit-ga-thumbnail.jpg',
  },
  {
    id:4,
    title: 'Vo dich 4',
    src: 'https://cdn.tgdd.vn/2020/10/CookRecipe/Avatar/salad-ot-chuong-thit-ga-thumbnail.jpg',
  }]

  return (
    <div>
        {loading ?  <Loading />
          :(
            <div>
              <Category />
              <ProductItems data={example}  />
            </div>
          )
        }
    </div>
  )
}
