import { React} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from './Constants';
import clsx from "clsx";

export default function Category(props) {
  const classes = useStyles();
  const { categories, handleCategoryChange, activeKey } = props;


  return (
    <div style={{ marginTop: 80}}>
        <Grid xs item container spacing={1}>
            {
                categories.map(category => 
                (<Grid item xs key={category.id}>
                  <Button 
                      className={clsx(classes.paper, {
                        [classes.activeMenu]:
                        activeKey.title === category.title
                      })}
                      onClick={() => handleCategoryChange(category)}>
                          <Grid
                          item             
                          container 
                          direction='column'
                          alignItems="center"
                          justifyContent="center"
                          >
                              <Grid xs={12} item >
                                  <img className={classes.icon} src={category.picture} alt='all'></img>
                              </Grid>
                              <Grid xs={12} item className={classes.title}>
                                  <span>{category.title}</span>
                              </Grid>
                          </Grid>
                  </Button>
                </Grid>)
            )
            }
        </Grid>
    </div>
  )
}
