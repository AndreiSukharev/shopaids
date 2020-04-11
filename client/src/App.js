import React from 'react'
import { Route, Router } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import { ThemeProvider } from '@material-ui/styles'
import MainPage from './pages/main'
import ShoppingList from './pages/ShoppingList'
import { createBrowserHistory } from 'history'
import ShopsMapPage from './pages/ShopsMapPage'
import Home from './pages/home'
import theme from './theme'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const history = createBrowserHistory({ basename: baseUrl })

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div className="App">
          <div className="page-content">
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/stores' component={ShopsMapPage}/>
            <Route exact path='/list' component={ShoppingList}/>
          </div>
          <Header/>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
