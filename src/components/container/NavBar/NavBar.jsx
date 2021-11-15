import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";


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
              <Link to="/" className="col-link">
                <Button variant="text" color="inherit">
                  Inicio
                </Button>
              </Link>
              <Link
                to="/categoria/fitness"
                element={<ItemListContainer />}
                className="col-link"
              >
                <Button variant="text" color="inherit">
                  Fitness
                </Button>
              </Link>
              <Link
                to="/categoria/musculacion"
                element={<ItemListContainer />}
                className="col-link"
              >
                <Button variant="text" color="inherit">
                  Musculación
                </Button>
              </Link>
              <Link
              to="/categoria/cintas"
              className="col-link"
              >
              <Button variant="text" color="inherit">
                Cintas
              </Button>
              </Link>
              <Link
              to="/categoria/indumentaria"
              className="col-link"
              >
              <Button variant="text" color="inherit">
                Indumentaria
              </Button>
              </Link>
            </Typography>
            <Button color="inherit">Iniciar Sesion</Button>
            <Link
            to="/cart"
            
            >
            <Button>
              <CartWidget />
            </Button>
            </Link>
            <img
              src={`./assets/FondoNavBar/fondoNavBar.jpg`}
              className="logo1"
              alt="logofit"
            />
          </Toolbar>
        </AppBar>

        <div className={classes.offset} />
      </div>
    </>
  );
}
