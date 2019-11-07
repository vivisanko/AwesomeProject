import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { routes } from './routes';

import './app.scss';

const App = () => (
  <Fragment>
    <Helmet>
      <title>Awesome project</title>
      <link rel="canonical" href="http://localhost:3000/" />
    </Helmet>
    <div className="app d-flex flex-column">
      <Switch>{renderRoutes(routes)}</Switch>
    </div>
  </Fragment>
);

export default App;
