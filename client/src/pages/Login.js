import React, { useState } from 'react'
import {
  Box, Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel, Grid, Link,
  TextField,
  Typography,
  CircularProgress
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Logo from "./shopaid-logo.png"
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©ShopAid {new Date().getFullYear()}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Login() {
  const classes = useStyles()

  const [login, updateLogin] = useState('')
  const [password, updatePassword] = useState('')
  const [isLoading, updateLoading] = useState(false)
  const validation = 'test'
  const history = useHistory()

  function signIn(e) {
    e.preventDefault()
    if (login === validation && password === validation) {
      updateLoading(true)
      setTimeout(() => {
        toast.success('You are logged in')
        history.push(`/shopaids/home`)
      }, 1500)
    } else {
      toast.error('Incorrect login or password')
    }
  }

  let loadingIcon;
  if (isLoading) {
    loadingIcon = <CircularProgress />;
  } else {
    loadingIcon = "";
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      {loadingIcon}
      <div className={classes.paper}>
        <img src={Logo} width="200em"></img>
        <form className={classes.form} noValidate onSubmit={signIn}>

          <TextField
            onChange={event => updateLogin(event.target.value)}
            value={login}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            helperText="Password: test"
          />
          <TextField
            onChange={event => updatePassword(event.target.value)}
            value={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText="Password: test"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2">
                Forgotten account?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright/>
      </Box>
    </Container>
  )
}

export default Login
