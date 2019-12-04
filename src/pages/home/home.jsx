import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { HeadHelmet } from '../../components/head-helmet/head-helmet';
import { Main } from '../../components/main/main';
import { PAGE_NAMES } from '../../constants';

// import { Products } from '../../components/products/products';

import './home.scss';

export const Home = () => (
  <Fragment>
    <HeadHelmet page={PAGE_NAMES.HOME}/>

    <Main key="tomato-avocado" className="home flex-column justify-content-center">
      <div className="text-white px-4">Match vegetables and fruits to color, pay attention!</div>
      <Button className="app-button my-4" to="/game-tomato-avocado" outline tag={Link}>
        Start
      </Button>
    </Main>
    <div className="home home-dark text-yellowgreen d-flex flex-grow-1 justify-content-center align-items-center">
        Choose game for you
        </div>
    <Main key="who-you-are" className="home flex-column justify-content-center">
      <div className="text-white px-4">Guess who you are. Ask questions that can be answered “yes” or “no” to understand what nickname your opponent came up with for you</div>
      <Button className="app-button my-4" to="/game-who-you-are" outline tag={Link}>
        Start
      </Button>
    </Main>

    {/* <Products>
      <div className="mx-1">Choose</div>
    </Products> */}
  </Fragment>
);

export default Home;
