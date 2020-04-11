import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const item = event.target.item;
    setState({
      ...state,
      [item]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="item1">Item</InputLabel>
        <Select
          native
          value={state.item}
          onChange={handleChange}
          inputProps={{
            name: 'item',
            id: 'item1',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Milk"}>Milk</option>
          <option value={"Bread"}>Bread</option>
          <option value={"Toilet Paper"}>Toilet Paper</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="item1">Item</InputLabel>
        <Select
          native
          value={state.item}
          onChange={handleChange}
          inputProps={{
            name: 'item',
            id: 'item2',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Milk"}>Milk</option>
          <option value={"Bread"}>Bread</option>
          <option value={"Toilet Paper"}>Toilet Paper</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="item1">Item</InputLabel>
        <Select
          native
          value={state.item}
          onChange={handleChange}
          inputProps={{
            name: 'item',
            id: 'item3',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Milk"}>Milk</option>
          <option value={"Bread"}>Bread</option>
          <option value={"Toilet Paper"}>Toilet Paper</option>
        </Select>
      </FormControl>

      <div>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        Save this list for future
        <Button variant="contained" color="primary">
          Continue
        </Button>
      </div>
    </div>
  );
}
