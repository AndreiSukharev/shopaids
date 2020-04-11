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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  buttonCustom: {
    borderRadius: 3,
    color: "primary",
  }
}));

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
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel  component="legend">What items do you want to buy?</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" checked={milk} onChange={handleChange} name="milk" />}
            label="Milk"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={bread} onChange={handleChange} name="bread" />}
            label="Bread"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={paper} onChange={handleChange} name="paper" />}
            label="Toilet paper"
          />
        </FormGroup>
        {/*<FormHelperText>Be careful</FormHelperText>*/}
      </FormControl>

      <div>
        <FormControlLabel
          control={<Checkbox  color="primary" onChange={handleChange} name="checkedA" />}
          label="Save this list for future"
        />
        <Button variant="contained" color="primary" component={Link} to="/stores">
          Continue
        </Button>
      </div>
    </div>
  );
}
