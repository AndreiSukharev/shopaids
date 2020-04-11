import React from 'react';
import { Route, Router } from 'react-router-dom';
// import './App.css';
import Header from "./components/Header";
import MainPage from "./pages/main"
import { createBrowserHistory } from 'history';
const baseUrl = document.getElementsByTagName('base')[ 0 ].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

function App() {
    return (
        <div className="App">
          <div className="page-content">
            <Router history={history}>
              <Route exact path='/' component={MainPage}/>
              <Route exact path='/shopping-list' component={MainPage}/>
            </Router>
          </div>
          <Header/>
        </div>
    );
}

export default App;
