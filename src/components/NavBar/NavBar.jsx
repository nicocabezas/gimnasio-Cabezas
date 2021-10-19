import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@mui/material/Button';
import './NavBar.css';


const useStyles = makeStyles(theme =>({
    offset: theme.mixins.toolbar
}))

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                    
                    <Button color="inherit">Fitness</Button>
                    <Button color="inherit">Musculación</Button>
                    <Button color="inherit">Cintas</Button>
                    <Button color="inherit">Indumentaria</Button>
                    <Typography className="Title" variant='h5' position='static' >
                        ProGym
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className = {classes.offset}></div>
        </div>
    )
}

export default NavBar
