import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HeadHelmet } from '../../components/head-helmet/head-helmet';
import { Main } from '../../components/main/main';
import { Products } from '../../components/products/products';

import './home.scss';

export const Home = () => (
  <Fragment>
    <HeadHelmet />
    <Products>
      <p className="mx-1">Choose</p>
    </Products>
    <Main className="home flex-column justify-content-center">
      <div>Pay attention, choose what you read</div>
      <Link className="text-white my-4" to="/game">
        Color like tomato or avocado?
      </Link>
    </Main>
  </Fragment>
);

export default Home;
