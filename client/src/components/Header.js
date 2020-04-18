import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Storefront';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

import {
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
            <BottomNavigationAction component={Link} label="Home" to="/shopaids/home" icon={<HomeIcon/>}/>
            <BottomNavigationAction component={Link} label="Stores" to="/shopaids/stores" icon={<ShopIcon/>}/>
            <BottomNavigationAction component={Link} label="List" to="/shopaids/list" icon={<ListAltIcon/>}/>
            <BottomNavigationAction component={Link} label="Profile" to="/shopaids/profile" icon={<PersonIcon/>}/>
        </BottomNavigation>
    )
}
