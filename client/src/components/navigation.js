import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Header extends Component{
  render() {

    return (
      <BottomNavigation
        showLabels
      >
        <Router>
          <BottomNavigationAction component={Link} label="Recents"  to="/Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" component={Link}  to="/Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction component={Link} label="Nearby" to="/Nearby" icon={<LocationOnIcon />} />
        </Router>
      </BottomNavigation>
    )
  }
}
