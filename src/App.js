import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav style={{ margin: 10 }}>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/posts" activeClassName="active">
              Blog
            </NavLink>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;
