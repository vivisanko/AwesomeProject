import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import { routes } from './routes';

import './app.scss';

const App = () => (
  <Fragment>
    <div className="app d-flex flex-column justify-content-between vh-100">
      <Switch>{renderRoutes(routes)}</Switch>
    </div>
  </Fragment>
);

export default App;
