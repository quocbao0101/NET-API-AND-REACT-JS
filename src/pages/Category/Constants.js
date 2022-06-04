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
 activeMenu:
 {
   padding: theme.spacing(2, 2, 2, 2),
   borderColor: '#EAEAEA',
   border: '3px solid',
   borderRadius: 30,
   height: 180,
   width: 160,
   minHeight: 150,
   minWidth: 100,
   background: '#FEF5DA ',
 }
}));

export const categoriesData = [
{id: 1, title: 'ALL'},
{id: 2, title: 'ITALIAN'},
{id: 3, title: 'AMERICAN'},
{id: 4, title: 'ASIAN'},
{id: 5, title: 'MEXICAN'},
{id: 6, title: 'THAI'},
{id: 7, title: 'VEGAN'},
{id: 8, title: 'DESSERTS'},
{id: 9, title: 'FAST FOOD'}
]