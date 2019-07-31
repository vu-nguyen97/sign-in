import React from 'react';
import './App.css';
import {BrowserRouter  , Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Success from './Components/Success'
import NoMatchPage from './Components/404'
 
function  App(){
  return(
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="/404-not-found">404</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/success" component={Success} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App