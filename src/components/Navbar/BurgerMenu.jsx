import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import register from '../../img/register.png'
import login from '../../img/login.png'
import add from '../../img/add.png'
import cart from '../../img/cart.png'
import logoutIcon from '../../img/logout.png'

import style from './Navbar.module.css'

import { Link, useNavigate } from "react-router-dom";
import { logout, checkUserLogin } from "../../helpers/functions";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        right: false,
    });

    const navigate = useNavigate();

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/register')}>
            <img className={style.register__logo} src={register} alt="" />
              <ListItemText primary='Register' />
            </ListItemButton>
        </ListItem>

        {checkUserLogin() ? (
          <>
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                logout();
                navigate('/');
              }}>
                <img className={style.profile__logo} src={logoutIcon} alt="" />
                <ListItemText primary='Logout' />
              </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
              <ListItemButton onClick={() => {
                navigate('/product-create');
              }}>
                <img className={style.profile__logo} src={add} alt="" />
                <ListItemText primary='Create product' />
              </ListItemButton>
              </ListItem>
              
              <ListItem disablePadding>
              <ListItemButton onClick={() => {
                navigate('');
              }}>
                <img className={style.cart__logo} src={cart} alt="" />
                <ListItemText primary='Add to cart' />
              </ListItemButton>
              </ListItem>
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('login')}>
              <img className={style.login__logo} src={login} alt="" />
              <ListItemText primary='Login' />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    navigate("/product-create");
                                }}>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create Product" />
                            </ListItemButton>
                        </ListItem>
                    </>
                ) : (
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => navigate("login")}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                onClick={toggleDrawer("right", true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}>
                {list("right")}
            </Drawer>
        </div>
    );
}
