import React, { Fragment } from 'react';
import { Main } from '../../components/main/main';
import { Helmet } from 'react-helmet-async';

// import { PAGE_NAMES } from '../../constants';

import './home.scss';

export const Home = () => (
  <Fragment>
    <Helmet>
        <title>Awesome avocado</title>
        <link rel='canonical' href='http://localhost:3000/' />
    </Helmet>
    <Main className="home">
      {Math.round(Math.random())?"tomato?":"avocado?"}
    </Main>
  </Fragment>
);

export default Home;
