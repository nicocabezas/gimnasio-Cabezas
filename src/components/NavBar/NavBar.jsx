import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@mui/material/Button";
import "./NavBar.css";
import fondo from "../../assets/img/fondoNavBar.jpg";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";




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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="toolbarcolor">
            {/* <Drawer 
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes
            /> */}

            <IconButton>
              <MenuIcon className="menucolor" />
            </IconButton>

            <Button color="inherit">Fitness</Button>
            <Button color="inherit">Musculación</Button>
            <Button color="inherit">Cintas</Button>
            <Button color="inherit">Indumentaria</Button>
            <ShoppingCartOutlined />
            <Button color="inherit">INICIA SESION</Button>

            <img className="logo1" src={fondo} alt="logofit" />
          </Toolbar>
        </AppBar>

        <div className={classes.offset}></div>
      </div>
    </>
  );
}

export const ItemListContainer = ( props ) => {

    const {titulo} = props

  console.log(props);

  return (
    
      <h1>{titulo}</h1>
    
  );
};
