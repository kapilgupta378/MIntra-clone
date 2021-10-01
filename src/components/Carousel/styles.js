import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles(() => ({
  carouselSliderWrap: {
    paddingTop: "103px",
    height: " 150px",
  },

  carouselpaper: {
    width: "95vw",
    height: "23em",
    display: "flex",
  },

  itemswrap: {
    display: "flex",
  },

  imgwrap: {
    margin: "22px 205px 30px 185px",
    "& img": {
      width: 212,
      height: 278,
    },

    detailswrap: {
      "& h1": {
        fontWeight: "bold",
      },
    },
  },
}));
