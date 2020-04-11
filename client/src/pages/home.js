import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import useStyles from '../classes'

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    milk: false,
    bread: false,
    paper: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { milk, bread, paper } = state;

  return (
    <div className={[classes.verticalFlex]}>
      <h2><Typography color="" variant="h5">What items do you want to buy?</Typography></h2>
      <FormGroup className={[classes.formGroup, classes.flexItemMain]}>
        <FormControlLabel
          control={<Checkbox color="primary" checked={milk} onChange={handleChange} name="milk" />}
          label="Eggs"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={bread} onChange={handleChange} name="bread" />}
          label="Pasta"
        />
        <FormControlLabel
          control={<Checkbox color="primary" checked={paper} onChange={handleChange} name="paper" />}
          label="Toilet rolls"
        />
      </FormGroup>

      <FormGroup className={classes.formGroup}>
        <Button variant="contained" color="primary" component={Link} to="/stores">
          Continue
        </Button>
        <FormControlLabel
          control={<Checkbox  color="primary" onChange={handleChange} name="checkedA" />}
          label="Save this list for future"
        />
      </FormGroup>
    </div>
  );
}
