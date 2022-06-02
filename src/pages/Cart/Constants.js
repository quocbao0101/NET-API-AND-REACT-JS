import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    menu: {
        "@media (min-width:900px)": {
            width: 500,
		},
		[theme.breakpoints.up("md")]: {
            width: 500,
		},
        width: 280,
        padding: 30,
    },
    text: {
        "@media (min-width:900px)": {
            fontSize: 20,
		},
		[theme.breakpoints.up("md")]: {
            fontSize: 25,
		},
        fontSize: 20,
        fontWeight: 700,
    },
    box: {
        margin: '40px 30px',
    },
    space: {
        marginRight: 5,
    },
    image: {
        "@media (min-width:900px)": {
            height: 100,
            width: 120,
		},
		[theme.breakpoints.up("md")]: {
            height: 100,
            width: 120,
		},
        height: 40,
        width: 60,
        borderRadius: 10,   
    },
    imageEdit: {
        "@media (min-width:900px)": {
            height: 130,
            width: '100%',
		},
		[theme.breakpoints.up("md")]: {
            height: 130,
            width: '100%',
		},
        height: 80,
        width: '100%',
        borderRadius: 10,   
    },
    button: {
        width: '90%',
        backgroundColor: '#0AAF60',
        padding: 15,
        color: '#fff',
        borderRadius: 15,
        '&:hover':
        {
            backgroundColor: '#0AAF60',
        }
    },
    textInput: {
        fontWeight: 700,
        height: 21, 
        width:'100%',
        maxWidth: 50, 
        fontSize:16,
    }
}));