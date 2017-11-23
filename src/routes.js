import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './app';
import Home from './components/home';
import CategoryDetails from './components/category-details';
import ItemDetails from './components/item-details';
import NoMatch from './components/no-match';

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