import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../store/Firebase";

type Anchor = "left";

interface Props {
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function MenuAppBar(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  /*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  };*/

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleProfile = () => {
    if (auth.currentUser !== null) {
      setAnchorEl(null);
      navigate("/profile");
    } else {
      console.log("no user logged in");
      setAnchorEl(null);
      navigate("/login");
    }
  };

  const handleLogout = () => {
    console.log(auth.currentUser);
    if (auth.currentUser !== null) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("logout successful");
          setAnchorEl(null);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //prinzipiell unnötig weil man den Logout-Button verschwinden lassen sollte nach nem Logout, aber so werden
      //unnötige Datenbankabfragen erst mal eingeschränkt
      console.log("no user logged in");
      setAnchorEl(null);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={props.toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Smart Services
          </Typography>

          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>My Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
