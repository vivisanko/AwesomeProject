import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Main } from '../../components/main/main';
import avocado from '../../components/icons/avocado.svg';
import tomato from '../../components/icons/tomato.svg';
import { HeadHelmet } from '../../components/head-helmet/head-helmet';
import { PAGE_NAMES } from '../../constants';

import './page-not-found.scss';

export const PageNotFound = () => (
  <Fragment>
    <HeadHelmet page={PAGE_NAMES.PAGE_NOT_FOUND} />
    <Main className="page-not-found flex-column justify-content-center vh-100">
      <span className="px-4 app-link-yellowgreen">not found page</span>
      <div className="text-white">
        <img src={avocado} className="app-logo-small py-4 px-1" alt="avocado" />
        <Button className="app-button my-4 mx-4" to="/" outline tag={Link}>
          Go home
        </Button>
        <img src={tomato} className="app-logo-small py-4 px-1" alt="tomato" />
      </div>
    </Main>
  </Fragment>
);

export default PageNotFound;
