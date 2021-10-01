import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import options from "../../../api/productAPI";
import useStyle from "./styles";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import AddToHomeScreenOutlinedIcon from "@material-ui/icons/AddToHomeScreenOutlined";
import { useSelector, useDispatch } from "react-redux";
import {
  changeOption,
  changeLoading,
} from "../../../features/navState/navStateSlice";

export const NavItemOpen = ({ loading, setLoading }) => {
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();

  const option = useSelector((state) => state.option.value);

  useEffect(() => {
    axios
      .request(options(option))
      .then(function (response) {
        setSearchData(response.data.docs);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [option, loading]);
  const classes = useStyle();
  return (
    <Box
      width="100vw"
      bgcolor="#fff"
      mt="5em"
      display="flex"
      flexDirection="column"
    >
      <Box
        className={classes.borderbottom}
        mt="20px"
        display="flex"
        flexDirection="column"
        justifyContent="spaceBetween"
        height="10em"
        px="1em"
      >
        <Typography
          className={classes.bold}
          paragraph="true"
          gutterBottom
          variant="subtitle2"
        >
          Home / Clothing /<Typography variant="span">Men T-Shirts</Typography>
        </Typography>
        <Typography
          className={classes.bold}
          paragraph="true"
          variant="subtitle2"
        >
          Men T-Shirts <Typography variant="span">- 62544 Items</Typography>
        </Typography>
        <Box display="flex" justifyContent="space-between" flexDirection="row">
          <Box
            display="flex"
            flex="0.7"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              className={classes.bold}
              align="center"
              pt="20px"
              variant="subtitle2"
            >
              FILTERS
            </Typography>
            <Box
              display="flex"
              flex="0.8"
              justifyContent="space-between"
              flexDirection="row"
            >
              <FormControl className={classes.formControl}>
                <InputLabel m="0px" id="demo-simple-select-label">
                  Bundles
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Bundles</MenuItem>
                  <MenuItem value={20}>Single Styles</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>{" "}
              <FormControl className={classes.formControl}>
                <InputLabel m="0px" id="demo-simple-select-label">
                  Contry of Origin
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>All Country of Origin</MenuItem>
                  <MenuItem value={20}>India</MenuItem>
                  <MenuItem value={30}>USA</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel m="0px" id="demo-simple-select-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>10XL</MenuItem>
                  <MenuItem value={20}>XL</MenuItem>
                  <MenuItem value={20}>L</MenuItem>
                  <MenuItem value={30}>M</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <FormControl className={classes.formControl}>
            <InputLabel m="0px" id="demo-simple-select-label">
              Sort by :
            </InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>What New</MenuItem>
              <MenuItem value={20}>Popularity</MenuItem>
              <MenuItem value={30}>Better discount</MenuItem>
              <MenuItem value={20}>Price; High to Low</MenuItem>
              <MenuItem value={20}>Price; Low to High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row">
        <Box flex="0.2" className={classes.borderright}>
          <Box className={classes.category}>
            <Typography className={classes.catheading}>CATEGORIES</Typography>
            <ul>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                Tshirts
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                Lounge Tshirt
              </li>
            </ul>
          </Box>

          <Box className={classes.category}>
            <Typography className={classes.catheading}>BRAND</Typography>
            <ul>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                Roadster(3326)
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                WROGN(1598)
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                Puma(1333)
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                QUANCIOUS(1268)
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                max(1089)
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                HRX by Hrithik
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                Mast & Harbour(968)
              </li>
              <li>
                <Checkbox
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                Jack & Jones(904)
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flex="1"
          flexDirection="row"
          flexWrap="wrap"
          aligzItems="center"
        >
          {loading ? (
            <CircularProgress color="secondary" className={classes.loading} />
          ) : (
            searchData.map((item, i) => {
              return (
                <Card key={i} className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.img}
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={item.product_main_image_url}
                      title="Contemplative Reptile"
                    />
                    <CardContent className={classes.heading}>
                      <Typography gutterBottom variant="subtitle2">
                        {item.product_title.slice(0, 60)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Price: {item.app_sale_price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardbtn}>
                    <IconButton color="secondary" aria-label="add an alarm">
                      <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add an alarm">
                      <AddToHomeScreenOutlinedIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add an alarm">
                      <LocalMallOutlinedIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
};
