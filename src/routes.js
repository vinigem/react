import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './app.js';
import Home from './home.js';
import CategoryDetails from './category-details.js';
import ItemDetails from './item-details.js';
import NoMatch from './no-match.js';

const routes = (
  <App>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/category/:id" component={CategoryDetails} />
      <Route path="/item/:id" component={ItemDetails} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </App>
)
 
export default routes;