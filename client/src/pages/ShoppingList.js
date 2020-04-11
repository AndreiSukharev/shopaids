import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import Divider from '@material-ui/core/Divider'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { Typography } from '@material-ui/core'
import useStyles from '../classes'

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

  return (
    <div className={[classes.verticalFlex, classes.p]}>
      <h2><Typography color="" variant="h5">Shopping List</Typography></h2>
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

      <Paper className={[classes.flexItemMain]}>
        <div>
          {['Eggs', 'Pasta', 'Toilet rolls'].map((product, goodNumber) => (
            <FormGroup className={classes.formGroup}>
              <div className={classes.flex}>
                <FormControlLabel
                  className={classes.flexItemMain}
                  control={<Checkbox color="primary" checked={state[product]} onChange={handleChange} name={product}/>}
                  label={product}
                />
                <TextField id={`${product}-qty`} value={`${goodNumber + 1}`} label="Qty" size="small"/>
              </div>
              <div>
                <Typography color="textSecondary" variant="caption">Indicate stock level for this item</Typography>
                <FormControl component="fieldset">
                  {/*<FormLabel component="legend">Indicate stock level for this item</FormLabel>*/}
                  <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary"/>}
                      label="0%"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="25"
                      control={<Radio color="primary"/>}
                      label="25%"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="50"
                      control={<Radio color="primary"/>}
                      label="50%"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="75"
                      control={<Radio color="primary"/>}
                      label=">75%"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <Divider/>
            </FormGroup>
          ))}
        </div>
      </Paper>

      <div className={classes.m}>
        <Button variant="contained" color="primary" component={Link} to="/shopaids/profile" fullWidth>
          Done
        </Button>
      </div>
    </div>
  )
}
