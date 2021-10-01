import React, { useState } from "react";
import { IconButton, Badge, MenuItem, Menu } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import Dropdown from "../Dropdown/dropdownnav/Dropdown";
import ProfileDropdown from "../Dropdown/profiledropdown/ProfileDropdown";

const PrimarySearchAppBar = ({ totalItems, setLoading }) => {
  const men = { color: "#ee5f73", background: " #ee5f73" };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles(men);
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const [dropdown, setDropdown] = useState(false);
  const [dropProfile, setDropProfile] = useState(false);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <header className={classes.header}>
        <div className={classes.navitems1}>
          <nav className={classes.navitem}>
            <Link to="/" className={classes.logo}>
              <img
                src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon.png"
                alt="logo"
              />
            </Link>
            <div
              onMouseEnter={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className={classes.itemHeading}
            >
              <a>MEN</a>
              <Dropdown
                setLoading={setLoading}
                props={men}
                dropdown={dropdown}
                setDropdown={setDropdown}
              />
            </div>

            <div
              onMouseEnter={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className={classes.itemHeading}
            >
              <a>WOMEN</a>
              {/* <Dropdown open={open} props={men} /> */}
            </div>

            <div
              className={classes.itemHeading}
              onMouseEnter={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              KIDS
            </div>

            <div
              className={classes.itemHeading}
              onMouseEnter={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              HOME&LIVING
            </div>

            <div
              className={classes.itemHeading}
              onMouseEnter={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              BEAUTY
            </div>
          </nav>
        </div>
        <div className={classes.navSearch}>
          <SearchIcon className={classes.SearchIcon} />
          <input
            className={classes.Searchinput}
            type="text"
            placeholder="Search for products, brands and more..."
          />
        </div>
        <div className={classes.navitems2}>
          <div
            className={classes.rightIcon}
            onMouseEnter={() => {
              setDropProfile(true);
            }}
            onMouseLeave={() => {
              setDropProfile(false);
            }}
          >
            <PersonOutlineOutlinedIcon />
            <a>Profile</a>
            <ProfileDropdown dropProfile={dropProfile} />
          </div>
          <div className={classes.rightIcon}>
            <FavoriteBorderOutlinedIcon />
            <a>Wishlist</a>
          </div>
          {location.pathname === "/" && (
            <div className={classes.rightIcon}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
                style={{ paddingTop: "0px" }}
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <div className={classes.iconwrap}>
                    <LocalMallOutlinedIcon className={classes.carticon} />
                    <a className={classes.cartname}>Beg</a>
                  </div>
                </Badge>
              </IconButton>
            </div>
          )}
        </div>
      </header>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
