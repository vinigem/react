import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home.js'
import Category from './Category.js'

class Content extends Component {
  render() {
    return (
     <div className="content">
       <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:id" component={Category} />
        </Switch>
      </Router>
     </div>
    );
  }
}

export default Content;
