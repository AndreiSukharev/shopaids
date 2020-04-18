import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
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
    <div className={ classes.verticalFlex}>
      <h2><Typography color="" variant="h5">What items do you want to buy?</Typography></h2>

      <Paper className={[classes.flexItemMain]}>
        <div>
          {['Eggs', 'Pasta', 'Toilet rolls'].map(product => (
            <FormGroup className={classes.formGroup}>
              <div className={classes.flex}>
                <FormControlLabel
                  className={classes.flexItemMain}
                  control={<Checkbox color="primary" checked={state[product]} onChange={handleChange} name={product}/>}
                  label={product}
                />
                <TextField id={`${product}-qty`} label="Qty" size="small"/>
              </div>
            </FormGroup>
          ))}
        </div>
      </Paper>

      <div className={classes.m}>
        <Button variant="contained" color="primary" component={Link} to="/shopaids/stores" fullWidth>
          Continue
        </Button>
      </div>
    </div>
  )
}
