import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Storefront';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            style={{zIndex: 100, position: 'relative'}}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction component={Link} label="Home" to="/home" icon={<HomeIcon/>}/>
            <BottomNavigationAction component={Link} label="Stores" to="/stores" icon={<ShopIcon/>}/>
            <BottomNavigationAction component={Link} label="List" to="/list" icon={<ListAltIcon/>}/>
            <BottomNavigationAction component={Link} label="Profile" to="/profile" icon={<PersonIcon/>}/>
        </BottomNavigation>
    )
}
