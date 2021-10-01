import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  category: {
    "& ul": {
      margin: "0px",
      listStyle: "none",
      "& li": {
        fontSize: "13px",
      },
    },
    margin: "0px",
    listStyle: "none",
  },
  catheading: {
    marginTop: "1em",
    fontSize: "15px",
    fontWeight: "bold",
    marginLeft: "3em",
    textAlign: "left",
    color: theme.palette.grey[700],
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  bold: {
    fontWeight: "bold",
    color: theme.palette.grey[700],
  },
  root: {
    width: 276,
    margin: "1em",
    height: 450,
  },
  img: {
    height: 300,
  },
  heading: {
    height: 96,
  },
  cardbtn: {
    display: "flex",
    justifyContent: "space-between",
    height: 55,
  },
  borderbottom: {
    borderBottom: "1px solid  #e0e0e0",
  },
  borderright: {
    borderRight: "1px solid  #e0e0e0",
  },
}));
