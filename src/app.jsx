import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { routes } from './routes';
import logo from './logo.svg';
import './app.scss';

export const App = () => (
  <Fragment>
    <Helmet>
      <title>Awesome project</title>
      <link rel="canonical" href="http://localhost:3000/" />
    </Helmet>
    <div className="app d-flex flex-column">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>Choose</p>
        <Link className="app-link-tomato" to="/">
          avocado
        </Link>
        <Link className="app-link-yellowgreen" to="/foreign-land">
          tomato
        </Link>
      </header>
      <Switch>{renderRoutes(routes)}</Switch>
    </div>
  </Fragment>
);
