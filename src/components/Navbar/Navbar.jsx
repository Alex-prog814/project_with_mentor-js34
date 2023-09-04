import React, { useState } from "react";
import logo from "./img/logo.svg";
import style from "./Navbar.module.css";
import BurgerMenu from "./BurgerMenu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { updateToken, getCategories } from "../../helpers/functions";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import { changeCategory, changeSearchVal } from "../../store/products/productsSlice";


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

  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getCategoriesData = async () => {
    let categories = await getCategories();
    setCategories(categories);
  };

  React.useEffect(() => {
    updateToken();
    getCategoriesData();
    dispatch(getProducts());
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
              <li onClick={() => navigate("/")} className={style.navbar__item}>
                <a href="">Home</a>
              </li>
              <li onClick={() => navigate("/products")} className={style.navbar__item}>
                <a href="">Products</a>
              </li>
              <li className={style.navbar__item}>
                  <NavDropdown id="nav-dropdown nav-dropdown-menu-white" title="Type" menuVariant="light" className={style.dropdown__menu}>
                    <NavDropdown.Item onClick={() => {
                        dispatch(changeCategory({ category: '' }));
                        dispatch(getProducts());
                      }}>
                        all
                    </NavDropdown.Item>
                    {categories.map((category, index) => (
                      <NavDropdown.Item key={index} onClick={() => {
                        dispatch(changeCategory({ category }));
                        dispatch(getProducts());
                      }}>
                        {category}
                      </NavDropdown.Item>
                    ))}
                </NavDropdown>
              </li>
              <li className={style.navbar__item}>
                <a href="#">Pages</a>
              </li>
            </ul>

            <form onSubmit={(e) => {
              e.preventDefault();
              dispatch(changeSearchVal({ search }));
              dispatch(getProducts());
            }}>
              <input type="text" onChange={(e) => setSearch(e.target.value)}/>
              <button type="submit">Search</button>
            </form>

            <div className={style.navbar__info}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                  <StyledInputBase />
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
