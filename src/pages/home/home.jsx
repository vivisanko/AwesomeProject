import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { HeadHelmet } from '../../components/head-helmet/head-helmet';
import { Main } from '../../components/main/main';
import { Products } from '../../components/products/products';

import './home.scss';

export const Home = () => (
  <Fragment>
    <HeadHelmet />
    <Main className="home flex-column justify-content-center">
      <div className="text-white px-4">Match vegetables and fruits to color, pay attention!</div>
      <Button className="app-button my-4" to="/game" outline tag={Link}>
        Start
      </Button>
    </Main>
    <Products>
      <div className="mx-1">Choose</div>
    </Products>
  </Fragment>
);

export default Home;
