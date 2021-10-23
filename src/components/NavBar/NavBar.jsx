import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";



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
        <AppBar position="static">
          
          <Toolbar className="toolbarcolor" >
          {/* <Drawer 
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes
            /> */}
  
            <IconButton>
              <MenuIcon className="menucolor" />
            </IconButton>
            <Typography variant="h5"  sx={{ flexGrow: 1 }}>
            <Button color="inherit">Fitness</Button>
            <Button color="inherit">Musculación</Button>
            <Button color="inherit">Cintas</Button>
            <Button color="inherit">Indumentaria</Button>
            
            </Typography>
            <Button color="inherit">INICIA SESION</Button>
            <CartWidget/>
            <img src={`./assets/FondoNavBar/fondoNavBar.jpg`}className="logo1" alt="logofit"/>
          </Toolbar>
        </AppBar>

        <div className={classes.offset}></div>
      </div>
    </>
  );
}
