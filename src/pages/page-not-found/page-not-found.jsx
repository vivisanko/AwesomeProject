import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="text-white">
        <img src={avocado} className="app-logo-small py-4 px-1" alt="avocado" />
        <span className="px-4">not found</span>
        <img src={tomato} className="app-logo-small py-4 px-1" alt="tomato" />
      </div>
      <Link className="app-link-yellowgreen my-4" to="/">
        Go home?
      </Link>
    </Main>
  </Fragment>
);

export default PageNotFound;
