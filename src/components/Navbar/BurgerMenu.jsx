import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
//import Button from '@mui/material/Button';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link, Navigate } from "react-router-dom";

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
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <ListItem key="register" disablePadding>
                    <ListItemButton
                        onClick={() => {
                            navigate("/register");
                        }}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="sign up" />
                    </ListItemButton>
                </ListItem>
                {checkUserLogin() ? (
                    <ListItem key="logout" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                logout();
                                navigate("/");
                            }}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="log out" />
                        </ListItemButton>
                    </ListItem>
                ) : (
                    <ListItem key="Login" disablePadding>
                        <ListItemButton
                            onClick={() => {
                                navigate("/login");
                            }}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="log In" />
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
