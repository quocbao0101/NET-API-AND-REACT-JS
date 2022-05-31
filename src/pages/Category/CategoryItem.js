import { React, } from 'react';
import { useStyles } from './Constants';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function CategoryItem(props) {
  const classes = useStyles();
  return (
    <Button 
    className={classes.paper}
    onClick={() => console.log(props)}>
        <Grid
        item             
        container 
        direction='column'
        alignItems="center"
        justifyContent="center"
        >
            <Grid xs={12} item >
                <img className={classes.icon} src={props.src} alt='all'></img>
            </Grid>
            <Grid xs={12} item className={classes.title}>
                <span>{props.title}</span>
            </Grid>
        </Grid>
    </Button>
  )
}
