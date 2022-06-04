import { makeStyles } from '@material-ui/core/styles';


export const columns = [
    { field: 'col1', headerName: 'ID' , flex: 1},
    { field: 'col2', headerName: 'Title', flex: 1},
    { field: 'col3', headerName: 'Price', flex: 1},
    { field: 'col4', headerName: 'Picture', flex: 1},
  ];
export const rows = [
    { id: 1, col1: 'Hello', col2: 'World', flex: 1 },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome', flex: 1 },
    { id: 3, col1: 'MUI', col2: 'is Amazing', flex: 1 },
]
export  const useStyles = makeStyles({
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      backgroundColor: '#FEF5DA',
      padding: 30,
      boxShadow: 24,
      borderRadius: 30,
      p: 4,
    },
    top: {
      marginTop: 20,
    },
  });