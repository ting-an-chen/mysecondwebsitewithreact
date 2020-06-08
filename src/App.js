import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from'./components/somethingontheleft.js';
import Home from './components/Home.js';
import Photography from './components/Photography.js';
import Blog from './components/Blog.js';
import Craft from './components/Craft.js';
import Contact from './components/Contact.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Hi</h2>
          <nav>
          <ul>
            <li><Link to={'/'} className="nav-link"> HOME </Link></li>
            <li><Link to={'/blog'} className="nav-link">BLOG</Link></li>
            <li><Link to={'/photograpy'} className="nav-link">PHOTOGRAPY</Link></li>
            <li><Link to={'/craft'} className="nav-link">CRAFT</Link></li>
            <li><Link to={'/contact'} className="nav-link">CONTACT</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/blog' component={Blog} />
              <Route path='/photograpy' component={Photography} />
              <Route path='/craft' component={Craft} />
              <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;