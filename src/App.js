import React, { Component } from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Privacy from './Privacy';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/privacy'} className="nav-link">privacy</Link></li>
          </ul>
          </nav>
          <hr /> */}
          <Switch>
              <Route exact path='/' Component={Home} />
              <Route path='/privacyPolicy' Component={Privacy} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;