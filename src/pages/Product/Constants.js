import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
 home: {
    padding: '50px 20px',
 },
 image: {
   marginBottom: 10,
   borderRadius: 20,
   height: '100%',
   width: '100%',
   maxHeight: 250,
   maxWidth: 420,
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
   fontSize: 20,
 },
 space:{
  marginTop: 20,
  fontWeight: 700,
  fontSize: 20,
  marginLeft: 50,
 },
 dollar: {
  fontSize: 20,
 }
}));
