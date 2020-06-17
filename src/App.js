import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Manage from './Pages/Manage';
import View from './Pages/View'
require('dotenv').config()




export default class App extends Component {

  render() {
    return (
      <Router>  
      <nav className="main-nav"> 
                <Link className="nav-link" to="/">Manage</Link>
                <Link className="nav-link" to="/view">View</Link>
      </nav>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Manage} />
            <Route path="/view" component={View} />
          </Switch>
        </div>
      </Router>

    )
  }
}