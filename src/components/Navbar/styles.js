import { makeStyles } from "@material-ui/core/styles";
// import { Directions } from "@material-ui/icons";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "79px",
    position: "fixed",
    display: "flex",
    zIndex: "99",
    background: "white",
    boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)",
  },

  navitems1: {
    // marginTop: "8px",
    display: "flex",
    flex: "0.7",
  },

  logo: {
    display: "flex",
    justifyContent: "center",
    paddingRight: "10px",
    paddingLeft: "50px",
    "& img": {
      marginTop: "12px",
      width: "50px",
      height: "50px",
    },
  },

  navitem: {
    display: " flex",
  },

  itemHeading: {
    marginRight: "5px",
    marginLeft: "5px",
    paddingTop: "25px",
    paddingBottom: "25px",
    paddingRight: "15px",
    paddingLeft: "15px",
    fontWeight: "bold",
    paddingBottom: "20px",

    "&:hover": {
      borderBottom: "5px solid",
      borderBottomColor: "#ee5f73",
    },
  },

  navSearch: {
    marginTop: "15px",
    display: "flex",
    flex: "0.5",

    "& input": {
      width: "29em",
      height: "3em",
      border: "none",
      background: " #f5f5f6",
      outline: "none",
      color: "#696e79",

      // "&:focus": {
      //   background: "white",
      //   outline: "1px solid black",
      // },
    },
  },

  SearchIcon: {
    paddingBottom: "5px",
    background: " #f5f5f6",
    fontSize: "40px",
    padding: "10px",
    color: "#696e79",
  },

  navitems2: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-around",
    flex: "0.2",
  },

  rightIcon: {
    paddingRight: "11px",
    paddingLeft: "11px",
    paddingBottom: "25px",
    paddingTop: "0px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "gray",

    "&:hover": {
      borderBottom: "5px solid",
      borderBottomColor: "#ee5f73",
    },
    "& a": {
      fontSize: "11px",
      fontWeight: "bold",
      color: "black",
      // textAlign: "center",
    },
  },

  iconwrap: {
    display: "flex",
    flexDirection: "column",
  },
  carticon: {
    color: "gray",
  },
  cartname: {
    fontSize: "11px",
    fontWeight: "bold",
    color: "black",
  },
}));
