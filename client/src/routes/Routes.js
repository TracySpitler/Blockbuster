import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import GoThrough from '../components/GoThrough';
import Unwanted from '../components/Unwanted';
import Keepers from '../components/Keepers';
import NotFound from '../views/NotFound';

const Routes = () => {

  return (

    <Switch>
      <Redirect exact from="/" to="/gothrough" />
      <Route path="/gothrough" exact component={()=>(<div><Navbar/><GoThrough/></div>)} />
      <Route path="/unwanted" component={()=>(<div><Navbar/><Unwanted/></div>)} />
      <Route path="/keepers" component={()=>(<div><Navbar/><Keepers/></div>)} />
      <Route path="*" component={NotFound} />
    </Switch>

  )
};

export default Routes;
