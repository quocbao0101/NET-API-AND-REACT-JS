import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
 paper: {
    padding: theme.spacing(2, 2, 2, 2),
    borderColor: '#EAEAEA',
    border: '3px solid',
    borderRadius: 30,
    height: 180,
    width: 160,
    minHeight: 150,
    minWidth: 100,
    background: '#FDFDFC',
 },
 icon: {
    height: '100%',
    width: '100%',
    maxHeight: 40,
    maxWidth: 40,
    borderRadius: '50%',
    marginTop: 10,
 },
 title: {
    marginTop: 20,
    fontWeight: 700,
    fontSize: 15,
 },
}));

export const categoryData = [
    {
        id:1,
        title: 'All',
    },
    {
        id:2,
        title: 'Italian',
    },
    {
        id:3,
        title: 'American',
    },
    {
        id:4,
        title: 'Asian',
    },
    {
        id:5,
        title: 'Mexican',
    },
    {
        id:6,
        title: 'Thai',
    },
    {
        id:7,
        title: 'Vegan',
    },
    {
        id:8,
        title: 'Desserts',
    },
    {
        id:9,
        title: 'Fast food',
    },
    {
        id:10,
        title: 'More',
    },
]