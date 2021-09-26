import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  dropdown: {
    top: "79px",
    left: "0px",
    width: "100em",
    height: "100em",
    display: "none",
    position: "absolute",
    zIndex: "1",
  },

  drop: {
    display: "block",
  },
  dropdownbackground: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.3)",
    width: "100em",
    height: "100em",
  },

  itemswrap: {
    width: "80em",
    height: "32em",
    display: "flex",
    justifyContent: "space-around",
    background: "white",
    boxShadow: "inset 0 0 8px rgb(0 0 0 / 10%)",

    "& div": {
      "& div": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      },
    },
  },

  heading: {
    color: (men) => men.color,
  },

  itemsline: {
    width: "150px",
    height: "1px",
    margin: "12px 0 0 0px",
    backgroundColor: "#eaeaec",
  },
}));
