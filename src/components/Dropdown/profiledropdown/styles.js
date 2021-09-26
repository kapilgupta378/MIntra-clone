import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  MuiPaperRoot: {
    top: "79px",
    width: "21em",
    height: "29em",
    position: "absolute",
    display: "none",
  },

  drop: {
    display: "block",
  },

  profileDropItemWrap: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  headings: {
    display: "flex",
    flex: "0.4",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: "20px",

    "& Button": {
      width: "14em",
    },
  },
  heading: {
    color: "#ee5f73",
    fontSize: "13px",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: "13px",
  },
  uiItems1: {
    marginLeft: "20px",

    display: "flex",
    flexDirection: "column",
    flex: "0.5",
    justifyContent: "space-evenly",

    "& $ul": {
      margin: "0px",
      padding: "0px",
      "& $li": {
        marginBottom: "5px",
        fontSize: "13px",
        listStyle: "none",
      },
    },
  },
  uiItems2: {
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    flex: "0.4",
    justifyContent: "space-evenly",
    "& $ul": {
      margin: "0px",
      padding: "0px",
      "& $li": {
        marginBottom: "5px",
        fontSize: "13px",
        listStyle: "none",
      },
    },
  },
  itemsline: {
    width: "150px",
    height: "1px",
    margin: "12px 0 0 0px",
    backgroundColor: "#eaeaec",
  },
}));
