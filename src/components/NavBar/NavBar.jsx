import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@mui/material/Button';
import './NavBar.css';
import fondo from '../../assets/img/fondoNavBar.jpg'



const useStyles = makeStyles(theme =>({
    offset: theme.mixins.toolbar
}))

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static">
                <Toolbar className="toolbarcolor">
                    <IconButton>
                        <MenuIcon className="menucolor"/>
                    </IconButton>
                    
                    <Button color="inherit">Fitness</Button>
                    <Button color="inherit">Musculación</Button>
                    <Button color="inherit">Cintas</Button>
                    <Button color="inherit">Indumentaria</Button>
            
                    <img className="logo1" src={fondo} alt="logofit"/>
                </Toolbar>
                
                
            </AppBar>
            
            <div className = {classes.offset}></div>
        </div>
    )
}

export default NavBar
