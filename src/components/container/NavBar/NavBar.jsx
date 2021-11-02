import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
//import Carlo from "./Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,

  drawer: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.root}>
        <AppBar >
          <Toolbar className="toolbarcolor">
            <IconButton>
              <MenuIcon className="menucolor" />
            </IconButton>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              <Button variant="text" color="inherit">
                Fitness
              </Button>
              <Button variant="text" color="inherit">
                Musculación
              </Button>
              <Button variant="text" color="inherit">
                Cintas
              </Button>
              <Button variant="text" color="inherit">
                Indumentaria
              </Button>
            </Typography>
            <Button color="inherit">Iniciar Sesion</Button>
            <Button>
              <CartWidget />
            </Button>
            <img
              src={`./assets/FondoNavBar/fondoNavBar.jpg`}
              className="logo1"
              alt="logofit"
            />
          </Toolbar>
        </AppBar>

        <div className={classes.offset}/>
      </div>
    </>
  );
}
