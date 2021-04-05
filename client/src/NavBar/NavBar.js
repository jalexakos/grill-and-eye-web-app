import React from 'react';

import Home from '../Home/Home';
import Menu from '../Menu/Menu';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = props => {
    return(
        <Router>
            <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              {/* <li>
                <Link to="/order">Order</Link>
              </li> */}
            </ul>
          </nav>
          

          <Switch>
            <Route path="/menu">
              <Menu />
            </Route>
            {/* <Route path="/order">
              <Order />
            </Route> */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    )
};

export default NavBar;