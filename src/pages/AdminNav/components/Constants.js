import { makeStyles } from "@material-ui/core/styles";
import BallotIcon from "@material-ui/icons/Ballot";
import DashboardIcon from "@material-ui/icons/Dashboard";



export const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 360,
      height: "100vh",
    },
    listItem: {
      height: "72px",
      paddingLeft: "20px",
      "&:hover": {
        backgroundColor: "#e0e0e0 !important",
        color: 'black',
      },
      '& .MuiListItemText-primary': {
        fontSize: 16,
        fontWeight: 400,
      },
    },
  
    listSubItem: {
      height: "60px",
      paddingLeft: "80px",
      "&:hover": {
        backgroundColor: "#e0e0e0 !important",
        color: 'black',
      },
    },
  
    activeSubMenu: {
      backgroundColor: "#023E8A !important",
      color: "white",
      fontWeight: 700,
      '& .MuiListItemText-primary': {
        fontSize: 16,
        fontWeight: 600,
      },
    },
  
    activeMenu: {
      backgroundColor: "#FEF5DA",
      color: "#000",
      fontWeight: 700,
      '& .MuiListItemText-primary': {
        fontSize: 16,
        fontWeight: 600,
      },
    },
  }));
  
export const listMenuData = [
    {
      key: "dashboard",
      name: "DashBoard",
      path: "/admin",
      icon: <DashboardIcon />,
    },
    {
      key: "manage_products",
      name: "Manage Products",
      path: "/admin/manage-prods",
      icon: <BallotIcon />,
    },
  ];