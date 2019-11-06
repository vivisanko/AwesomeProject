import React, { Fragment } from 'react';
import { Main } from '../../components/main/main';
import { Helmet } from 'react-helmet-async';

// import { PAGE_NAMES } from '../../constants';

import './home.scss';

export const Home = () => (
  <Fragment>
    <Helmet>
      <title key="title">metaInfo.title</title>,
      <meta key="description" name="description" content="metaInfo.description" />
      <meta key="keywords" name="keywords" content="metaInfo.keywords" />,
    </Helmet>
    <Main className="home">{Math.round(Math.random()) ? 'tomato?' : 'avocado?'}</Main>
  </Fragment>
);

export default Home;
