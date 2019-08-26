import React from "react";
import { Route, Switch } from 'react-router-dom';

import Browse from '../views/Browse';
import NotFound from '../views/NotFound';

const AppRouter = () => {

  return (

    <Switch>
      <Route path="/" exact component={Browse} />
      <Route path="*" component={NotFound} />
    </Switch>

  )
};

export default AppRouter;
