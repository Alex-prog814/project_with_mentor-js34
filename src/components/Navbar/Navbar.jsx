import React from "react";
import logo from "./img/logo.svg";
import style from "./Navbar.module.css";
import BurgerMenu from "./BurgerMenu";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { UpdateToken, updateToken } from "../../helpers/functions";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  React.useEffect(() => {
    updateToken();
  }, []);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.navbar__wrapper}>
            <div className={style.navbar__logo}>
              <img src={logo} alt="" />
            </div>

            <ul className={style.navbar__menu}>
              <li className={style.navbar__item}>Home</li>
              <li className={style.navbar__item}>About us</li>
              <li className={style.navbar__item}>Cathegory</li>
              <li className={style.navbar__item}>Pages</li>
            </ul>

            <div className={style.navbar__info}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>

              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
