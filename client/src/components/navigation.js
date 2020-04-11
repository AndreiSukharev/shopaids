import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
    width: 500,
  },
});

export default class Header extends Component {
  render() {
    // return (
    // const classes = useStyles();
    // const [value, setValue] = React.useState(0);

    return (
      <BottomNavigation
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        showLabels
        // className={classes.root}
      >
        <Router>
          <BottomNavigationAction component={Link} label="Home" to="/home" icon={<HomeIcon/>}/>
          <BottomNavigationAction label="Stores" component={Link} to="/stores" icon={<FavoriteIcon/>}/>
          <BottomNavigationAction component={Link} label="Lists" to="/lists" icon={<ListAltIcon/>}/>
          <BottomNavigationAction component={Link} label="Profile" to="/profile" icon={<PersonIcon/>}/>
        </Router>
      </BottomNavigation>
    )
  }
}
