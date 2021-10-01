import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { changeOption } from "../../../features/navState/navStateSlice";
import { NavLink } from "react-router-dom";

const Dropdown = ({ dropdown, props, setDropdown, setLoading }) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const option = useSelector((state) => state.option.value);

  return (
    <Fade when={dropdown}>
      <div
        elevation={3}
        className={`${classes.dropdown} ${dropdown ? classes.drop : ""}`}
      >
        <div className={classes.dropdownbackground}>
          <div className={classes.itemswrap}>
            <div>
              <div>
                <h4 className={classes.heading}>Topwear</h4>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("T-Shirts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    T-Shirts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Casual Shirts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Casual Shirts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Formal Shirts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Formal Shirts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sweatshirts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sweatshirts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sweaters"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sweaters
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Jackets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Jackets
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Blazers & Coats"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Blazers & Coats
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Suits"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Suits
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Rain Jackets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Rain Jackets
                  </Typography>
                </NavLink>
              </div>
              <div className={classes.itemsline}></div>
              <div>
                <h4 className={classes.heading}>Indian & Festive Wear</h4>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Kurtas & Kurta Sets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Kurtas & Kurta Sets
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sherwanis"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sherwanis
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Nehru Jackets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Nehru Jackets
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Dhotis"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Dhotis
                  </Typography>
                </NavLink>
              </div>
            </div>
            <div>
              <div>
                <h4 className={classes.heading}>Bottomwear</h4>

                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("jeans"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Track Pants & Joggers
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Shorts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Shorts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Formal Trousers"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Formal Trousers
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Casual Trousers"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Casual Trousers
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Jeans"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Jeans
                  </Typography>
                </NavLink>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Innerwear & Sleepwear</h4>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Thermals"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Thermals
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sleepwear & Loungewear"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sleepwear & Loungewear
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Vests"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Vests
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Boxers"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Boxers
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Briefs & Trunks"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Briefs & Trunks
                  </Typography>
                </NavLink>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Plus Size</h4>
              </div>
            </div>
            <div>
              <div>
                <h4 className={classes.heading}>Footwear</h4>

                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Socks"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Socks
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Flip Flops"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Flip Flops
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("jeaSandals & Floatersns"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sandals & Floaters
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sneakers"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sneakers
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Formal Shoes"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Formal Shoes
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sports Shoes"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sports Shoes
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Casual Shoes"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Casual Shoes
                  </Typography>
                </NavLink>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Personal Care & Grooming</h4>
              </div>
              <div>
                <h4 className={classes.heading}>Sunglasses & Frames</h4>
              </div>
              <div>
                <h4 className={classes.heading}>Watches</h4>
              </div>
            </div>
            <div>
              <div>
                <h4 className={classes.heading}>Sports & Active Wear</h4>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Swimwear"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Swimwear
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sports Accessories"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sports Accessories
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Jackets & Sweatshirts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Jackets & Sweatshirts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Tracksuits"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Tracksuits
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Track Pants & Shorts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Track Pants & Shorts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Active T-Shirts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Active T-Shirts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sports Sandals"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sports Sandals
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Sports Shoes"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Sports Shoes
                  </Typography>
                </NavLink>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Gadgets</h4>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Speakers"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Speakers
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Headphones"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Headphones
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Fitness Gadgets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Fitness Gadgets
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Smart Wearables"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Smart Wearables
                  </Typography>
                </NavLink>
              </div>
            </div>
            <div>
              <div>
                <h4 className={classes.heading}>Fashion Accessories</h4>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Helmets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Helmets
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Rings & Wristwear"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Rings & Wristwear
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Phone Cases"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Phone Cases
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Mufflers, Scarves & Gloves"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Mufflers, Scarves & Gloves
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("vAccessory Gift Sets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Accessory Gift Sets
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Accessory Gift Sets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    c
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Ties"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Ties, CuffNavLinks & Pocket Squares
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Trimmers"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Trimmers
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Deodorants"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Deodorants
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Perfumes & Body Mists"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Perfumes & Body Mists
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Belts"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Belts
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("Wallets"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  >
                    Wallets
                  </Typography>
                </NavLink>
                <NavLink className={classes.textDeco} to="/selectpro">
                  <Typography
                    onClick={() => {
                      dispatch(changeOption("jeans"));
                      setLoading(true);
                      setDropdown(false);
                    }}
                    variant="subtitle2"
                  ></Typography>
                </NavLink>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Bags & Backpacks</h4>
              </div>
              <div>
                <h4 className={classes.heading}>Luggages & Trolleys</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Dropdown;
