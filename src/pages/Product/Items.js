import { React, } from 'react';
import { useStyles } from './Constants';
import Grid from '@material-ui/core/Grid';
import { CardMedia } from '@material-ui/core';


export default function Items(props) {
  const classes = useStyles();

  return (
    <Grid xs item>
        <CardMedia className={classes.image}         
        component="img"
        image={props.src}
        alt="Paella dish" />
        <Grid xs item>
            <span className={classes.title}>{props.title}</span>
        </Grid>
    </Grid>
  )
}
