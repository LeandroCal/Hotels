import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Contact from './pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacto" exact component={Contact} />
    </Switch>
  );
}
