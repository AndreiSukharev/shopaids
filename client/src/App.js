import React from 'react'
import { Route, Router } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import { ThemeProvider } from '@material-ui/styles'
import Login from './pages/Login'
import Profile from './pages/profile'
import ShoppingList from './pages/ShoppingList'
import { createBrowserHistory } from 'history'
import ShopsMapPage from './pages/ShopsMapPage'
import Home from './pages/home'
import theme from './theme'
import { ToastContainer, toast } from 'react-toastify';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
export const history = createBrowserHistory({ basename: baseUrl })

toast.configure({
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  //etc you get the idea
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div className="App">
          <div className="page-content">
            <Route exact path='/shopaid' component={Login}/>
            <Route exact path='/shopaid/home' component={Home}/>
            <Route exact path='/shopaid/stores' component={ShopsMapPage}/>
            <Route exact path='/shopaid/list' component={ShoppingList}/>
            <Route exact path='/shopaid/profile' component={Profile}/>
          </div>
          <Header/>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
