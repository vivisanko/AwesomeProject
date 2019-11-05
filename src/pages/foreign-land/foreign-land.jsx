import React, { Fragment } from 'react';
import { Main } from '../../components/main/main';
import { Helmet } from 'react-helmet-async';

// import { PAGE_NAMES } from '../../constants';

import './foreign-land.scss';

export const ForeignLand = () => (
  <Fragment>
    <Helmet>
      <title>Awesome tomato</title>
      <link rel='canonical' href='http://localhost:3000/' />
    </Helmet>
    <Main className="foreign-land">
      {Math.round(Math.random())?"tomato?":"avocado?"}
    </Main>
  </Fragment>
);

export default ForeignLand;
