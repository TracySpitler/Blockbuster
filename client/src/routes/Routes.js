import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import GoThrough from '../components/GoThrough';
import Unwanted from '../components/Unwanted';
import Keepers from '../components/Keepers';
import NotFound from '../views/NotFound';

const Routes = () => {

  return (

    <Switch>
      <Redirect exact from="/" to="/gothrough" />
      <Route path="/gothrough" exact component={GoThrough} />
      <Route path="/unwanted" exact component={Unwanted} />
      <Route path="/keepers" exact component={Keepers} />
      <Route path="*" component={NotFound} />
    </Switch>
    
  )
};

export default Routes;
