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

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <p>
              <Link to="/">Manage</Link>
            </p>
            <p>
              <Link to="/view">View</Link>
            </p>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Manage} />
            <Route path="/view" component={View} />
          </Switch>
        </div>
      </Router>
    )
  }
}