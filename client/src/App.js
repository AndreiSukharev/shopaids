import React, { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { ThemeProvider } from '@material-ui/styles'
import Login from './pages/Login'
import Profile from './pages/profile'
import ShoppingList from './pages/ShoppingList'
import { createBrowserHistory } from 'history'
import ShopsMapPage from './pages/ShopsMapPage'
import Home from './pages/home'
import theme from './theme'
import DirectionsService from './services/DirectionsService'
import Context from './context'
import { toast } from 'react-toastify';
import ShopsService from './services/ShopsService'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
export const history = createBrowserHistory({ basename: baseUrl })
export const services = {
  directions: new DirectionsService('5b3ce3597851110001cf6248b4ac97fac7864337817642a060af17d1'),
  shops: new ShopsService(),
}

toast.configure({
  position: 'bottom-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
})

function App() {
  const [products, updateProducts] = useState([])

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div className="App">
          <div className="page-content">
            <Context.Provider value={products}>
              <Route exact path='/shopaids' component={Login}/>
              <Route exact path='/shopaids/home' component={Home}/>
              <Route exact path='/shopaids/stores' component={ShopsMapPage}/>
              <Route exact path='/shopaids/list' component={ShoppingList}/>
              <Route exact path='/shopaids/profile' component={Profile}/>
            </Context.Provider>
          </div>
          <Header/>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
