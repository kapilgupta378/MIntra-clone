import { Box, Button, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const ProfileDropdown = ({ dropProfile }) => {
  const classes = useStyles();

  return (
    <Paper
      elevation={3}
      className={`${classes.MuiPaperRoot} ${dropProfile ? classes.drop : ""}`}
    >
      <Box className={classes.profileDropItemWrap}>
        <Box className={classes.headings}>
          <Typography className={classes.heading}>Welcome</Typography>
          <Typography className={classes.subHeading}>
            To access account and manage orders
          </Typography>

          <Button variant="outlined" color="secondary">
            LOGIN & SINGUP
          </Button>
          <div className={classes.itemsline}></div>
        </Box>
        <Box className={classes.uiItems1}>
          <ul className="listitems">
            <li className="listitem">Orders</li>
            <li className="listitem">Wishlist</li>
            <li className="listitem">Gift Cards</li>
            <li className="listitem">Contact Us</li>
            <li className="listitem">Myntra InsiderNew</li>
          </ul>
          <div className={classes.itemsline}></div>
        </Box>
        <Box className={classes.uiItems2}>
          <ul className="listitems">
            <li className="listitem">Myntra Credit</li>
            <li className="listitem">Coupons</li>
            <li className="listitem">Saved Cards</li>
            <li className="listitem">Saved Addresses</li>
          </ul>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProfileDropdown;
