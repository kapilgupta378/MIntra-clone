import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Fade from "react-reveal/Fade";

const Dropdown = ({ dropdown, props }) => {
  const classes = useStyles(props);
  return (
    <Fade opposite collapse when={dropdown}>
      <div
        elevation={3}
        className={`${classes.dropdown} ${dropdown ? classes.drop : ""}`}
      >
        <div className={classes.dropdownbackground}>
          <div className={classes.itemswrap}>
            <div>
              <div>
                <h4 className={classes.heading}>Topwear</h4>
                <Typography variant="subtitle2">T-Shirts</Typography>
                <Typography variant="subtitle2">Casual Shirts</Typography>
                <Typography variant="subtitle2">Formal Shirts</Typography>
                <Typography variant="subtitle2">Sweatshirts</Typography>
                <Typography variant="subtitle2">Sweaters</Typography>
                <Typography variant="subtitle2">Jackets</Typography>
                <Typography variant="subtitle2">Blazers & Coats</Typography>
                <Typography variant="subtitle2">Suits</Typography>
                <Typography variant="subtitle2">Rain Jackets</Typography>
              </div>
              <div className={classes.itemsline}></div>
              <div>
                <h4 className={classes.heading}>Indian & Festive Wear</h4>
                <Typography variant="subtitle2">Kurtas & Kurta Sets</Typography>
                <Typography variant="subtitle2">Sherwanis</Typography>
                <Typography variant="subtitle2">Nehru Jackets</Typography>
                <Typography variant="subtitle2">Dhotis</Typography>
              </div>
            </div>
            <div>
              <div>
                <h4 className={classes.heading}>Bottomwear</h4>

                <Typography variant="subtitle2">
                  Track Pants & Joggers
                </Typography>
                <Typography variant="subtitle2">Shorts</Typography>
                <Typography variant="subtitle2">Formal Trousers</Typography>
                <Typography variant="subtitle2">Casual Trousers</Typography>
                <Typography variant="subtitle2">Jeans</Typography>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Innerwear & Sleepwear</h4>
                <Typography variant="subtitle2">Thermals</Typography>
                <Typography variant="subtitle2">
                  Sleepwear & Loungewear
                </Typography>
                <Typography variant="subtitle2">Vests</Typography>
                <Typography variant="subtitle2">Boxers</Typography>
                <Typography variant="subtitle2">Briefs & Trunks</Typography>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Plus Size</h4>
              </div>
            </div>
            <div>
              <div>
                <h4 className={classes.heading}>Footwear</h4>

                <Typography variant="subtitle2">Socks</Typography>
                <Typography variant="subtitle2">Flip Flops</Typography>
                <Typography variant="subtitle2">Sandals & Floaters</Typography>
                <Typography variant="subtitle2">Sneakers</Typography>
                <Typography variant="subtitle2">Formal Shoes</Typography>
                <Typography variant="subtitle2">Sports Shoes</Typography>
                <Typography variant="subtitle2">Casual Shoes</Typography>
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
                <Typography variant="subtitle2">Swimwear</Typography>
                <Typography variant="subtitle2">Sports Accessories</Typography>
                <Typography variant="subtitle2">
                  Jackets & Sweatshirts
                </Typography>
                <Typography variant="subtitle2">Tracksuits</Typography>
                <Typography variant="subtitle2">
                  Track Pants & Shorts
                </Typography>
                <Typography variant="subtitle2">Active T-Shirts</Typography>
                <Typography variant="subtitle2">Sports Sandals</Typography>
                <Typography variant="subtitle2">Sports Shoes</Typography>
              </div>
              <div className={classes.itemsline}></div>

              <div>
                <h4 className={classes.heading}>Gadgets</h4>
                <Typography variant="subtitle2">Speakers</Typography>
                <Typography variant="subtitle2">Headphones</Typography>
                <Typography variant="subtitle2">Fitness Gadgets</Typography>
                <Typography variant="subtitle2">Smart Wearables</Typography>
              </div>
            </div>
            <div>
              <div>
                <h4 className={classes.heading}>Fashion Accessories</h4>
                <Typography variant="subtitle2">Helmets</Typography>
                <Typography variant="subtitle2">Rings & Wristwear</Typography>
                <Typography variant="subtitle2">Phone Cases</Typography>
                <Typography variant="subtitle2">
                  Mufflers, Scarves & Gloves
                </Typography>
                <Typography variant="subtitle2">Accessory Gift Sets</Typography>
                <Typography variant="subtitle2">Caps & Hats</Typography>
                <Typography variant="subtitle2">
                  Ties, Cufflinks & Pocket Squares
                </Typography>
                <Typography variant="subtitle2">Trimmers</Typography>
                <Typography variant="subtitle2">Deodorants</Typography>
                <Typography variant="subtitle2">
                  Perfumes & Body Mists
                </Typography>
                <Typography variant="subtitle2">Belts</Typography>
                <Typography variant="subtitle2">Wallets</Typography>
                <Typography variant="subtitle2"></Typography>
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
