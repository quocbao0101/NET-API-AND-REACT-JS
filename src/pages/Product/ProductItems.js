import { useStyles } from './Constants';
import Grid from '@material-ui/core/Grid';
import Items from './Items';





export default function ProductItems(props) {
  const data = props.data;
  const classes = useStyles();


  return (
    <>
        <Grid xs item container className={classes.home}>
            <Grid xs={12} item style={{ marginBottom : 50}}>
                <span className={classes.title}>Popular dishes</span>
            </Grid>
            <Grid xs={12} item container spacing={3}>
                {data.map(mealList => 
                <Grid xs={12} md={3} xl={3} item key={mealList.id}>
                        <Items 
                            id={mealList.id} 
                            title={mealList.title}
                            src={mealList.src}
                            dollar={mealList.dollar}
                        >
                        </Items>
                </Grid>
                )}
            </Grid>
        </Grid>
    </>
  )
}
