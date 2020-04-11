import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  buttonCustom: {
    borderRadius: 3,
    color: 'primary',
  }
}))

export default function CheckboxesGroup() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    milk: false,
    bread: false,
    paper: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { milk, bread, paper } = state

  return (
    <div className={classes.root}>
      <h2>Shopping List</h2>

      <form noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2020-04-11"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>

          {/*item1*/}
            <FormControlLabel
              control={<Checkbox color="primary" checked={milk} onChange={handleChange} name="milk"/>}
              label="Milk"
            />
            <TextField id="milk-qty" label="Qty"/>
            <div>
              <p>Indicate stock level for this item</p>
              <FormControl component="fieldset">
                {/*<FormLabel component="legend">Indicate stock level for this item</FormLabel>*/}
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  <FormControlLabel
                    value="0"
                    control={<Radio color="primary" />}
                    label="0%"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="25"
                    control={<Radio color="primary" />}
                    label="25%"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="50"
                    control={<Radio color="primary" />}
                    label="50%"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="75"
                    control={<Radio color="primary" />}
                    label=">75%"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
            </div>

          {/* item 2*/}
          <FormControlLabel
            control={<Checkbox color="primary" checked={bread} onChange={handleChange} name="bread"/>}
            label="Bread"
          />
          <TextField id="bread-qty" label="Qty"/>
          <div>
            <p>Indicate stock level for this item</p>
            <FormControl component="fieldset">
              {/*<FormLabel component="legend">Indicate stock level for this item</FormLabel>*/}
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  value="0"
                  control={<Radio color="primary" />}
                  label="0%"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="25"
                  control={<Radio color="primary" />}
                  label="25%"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="50"
                  control={<Radio color="primary" />}
                  label="50%"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="75"
                  control={<Radio color="primary" />}
                  label=">75%"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
          </div>

          {/*item3*/}
          <FormControlLabel
            control={<Checkbox color="primary" checked={paper} onChange={handleChange} name="paper"/>}
            label="Toilet paper"
          />
          <TextField id="paper-qty" label="Qty"/>
          <div>
            <p>Indicate stock level for this item</p>
            <FormControl component="fieldset">
              {/*<FormLabel component="legend">Indicate stock level for this item</FormLabel>*/}
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  value="0"
                  control={<Radio color="primary" />}
                  label="0%"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="25"
                  control={<Radio color="primary" />}
                  label="25%"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="50"
                  control={<Radio color="primary" />}
                  label="50%"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="75"
                  control={<Radio color="primary" />}
                  label=">75%"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </FormGroup>
      </FormControl>

      <div>
        <Button variant="contained" color="primary" component={Link} to="/stores">
          Done
        </Button>
      </div>
    </div>
  )
}
