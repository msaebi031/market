import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Badge,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  ShoppingCartOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import SearchIcon from "../../SearchIcon";
import { useSelector } from "react-redux";
import Link from "next/link";

const pages = [
  { name: "شماره تماس", href: "#Property" },
  { name: "آدرس", href: "#Ability" },
  { name: "سفارش", href: "#awards" },
];

const NavBar = ({onClick}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const { cart } = useSelector((state) => state);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="bg-navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            display={{ xs: "flex", md: "none" }}
            className="justify-between align-center w-100"
          >
            <Box>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className="borderMenu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                display={{ xs: "block", md: "none" }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    className="dividerMarginXs"
                  >
                    <Link onClick={onClick} className="navbar-hover" href={page.href}>
                      <Typography
                        className="font-bold"
                        color="light.light"
                        variant="body2"
                        textAlign="center"
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box>
              <Box
                component="img"
                src={"/img/logo.png"}
                alt="لوگو"
                className="widthLogo styleLogoXs"
              />
            </Box>
          </Box>
          <Box
            display={{ xs: "none", md: "flex" }}
            className="justify-between w-100"
            alignItems="center"
          >
            <Box className="d-flex justify-between navbar-hover link">
              {pages.map((page, index) => (
                <Link
                  href={page.href}
                  key={index}
                  // onClick={handleCloseNavMenu}
                  color="light.light"
                >
                  {page.name}
                </Link>
              ))}
            </Box>

            <Box
              component="img"
              src={"/img/logo.png"}
              alt="لوگو"
              className="widthLogo"
            />

            <Box display="flex" justifyContent="center" alignItems="center">
              <SearchIcon />
              <Divider
                variant="middleinset"
                flexItem
                className="marginDivider"
                color="divider"
              />
              <Link href="/buygoods">
                <IconButton>
                  <Badge badgeContent={cart.length} color="warning">
                    <ShoppingCartOutlined
                      className="iconFont navbar-hover"
                      color="white"
                    />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
