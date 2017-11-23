import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './app';
import Home from './home';
import CategoryDetails from './category-details';
import ItemDetails from './item-details';
import NoMatch from './no-match';

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