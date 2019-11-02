import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch } from "react-router-dom";
import { routes } from './routes';
import logo from './logo.svg';
import './app.scss';

export const App = () => (

    <div className="app d-flex flex-column">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          <Switch>
              {renderRoutes(routes)}
          </Switch>
    </div>
  );