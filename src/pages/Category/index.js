import { React, useEffect, useState  } from 'react';
import { categoryData, useStyles } from './Constants';
import Grid from '@material-ui/core/Grid';
import CategoryItem from './CategoryItem';

export default function Category() {
  const classes = useStyles();
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setCategories(categoryData);
    setLoading(true);
  }, []); 

  return (
    <div style={{ marginTop: 80}}>
        <Grid xs item container spacing={1}>
            {
                categories && categories.map(category => 
                <Grid item xs key={category.id}>
                    <CategoryItem title={category.title} />
                </Grid>
            )}
        </Grid>
    </div>
  )
}
