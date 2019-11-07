import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Main } from '../../components/main/main';
import { Products } from '../../components/products/products';
// import { PAGE_NAMES } from '../../constants';

import './home.scss';

export const Home = () => (
  <Fragment>
    <Helmet>
      <title key="title">metaInfo.title</title>,
      <meta key="description" name="description" content="metaInfo.description" />
      <meta key="keywords" name="keywords" content="metaInfo.keywords" />,
    </Helmet>
    <Products>
      <p className="mx-1">Choose</p>
    </Products>
    <Main className="home flex-column">
      <div>Pay attention, choose what you read</div>
      <Link className="app-link-yellowgreen text-white my-4" to="/foreign-land">
        Play now
      </Link>
    </Main>
  </Fragment>
);

export default Home;
