import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


export default () => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Login" />
      </form>
      <form noValidate autoComplete="off">
        <TextField id="filled-basic" label="Password" />
      </form>
      <Button variant="contained" color="primary" component={Link} to="/home">
        Sign In
      </Button>
    </div>
  )
}
