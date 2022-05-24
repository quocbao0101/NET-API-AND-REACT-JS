import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      padding: 2,
    },
    menu: {
        padding: 12,
        borderRadius: 10,
    },
    text: {
      color: '#000',
      fontSize: 35,
      marginTop: 5,
    },
    appbar: {
      background: '#FFFFFF',
    },
    search: {
      position: 'relative',
      borderRadius: 10,
      marginRight: theme.spacing(2),
      padding: 3,
      marginLeft: 0,
      width: '100%',
      height: 50,
      background: '#FAFBF8',
    },
    searchIcon: {
      padding: theme.spacing(0, 3),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F7B500',
    },
    inputRoot: {
      color: '#000',
      padding: 5,
      fontSize: 24,
    },
    inputInput: {
      padding: theme.spacing(1, 2, 3, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
    },
    iconCart: {
      background: '#FEF5DA',
      padding: 16,
      borderRadius: 10,
      '&:hover': {
        background: "#FEF5DA",
     },
    },
    something: {
        color: '#000',
        fontSize: 28,
        marginTop: 5,
        marginLeft: 8,
    },
    username: {
        color: '#000',
    }
  }));