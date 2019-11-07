import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet-async';
// import classNames from 'classnames';
import Countdown from 'react-countdown-now';
// import HeadHelmet from '../../head-helmet';
import { Products } from '../../components/products/products';
import { Main } from '../../components/main/main';
// import { PAGE_NAMES } from '../../constants';

import './foreign-land.scss';

const COUNTDOWN_CLASSES = 'box d-flex justify-content-center align-items-center rounded mx-1';

const PLAY_TIME = 60000;

const countdownRenderer = ({ minutes, seconds }) => (
  <div className="d-flex align-items-center m-1 countdown">
    <div className={COUNTDOWN_CLASSES}>{minutes}</div>:<div className={COUNTDOWN_CLASSES}>{seconds}</div>
  </div>
);

countdownRenderer.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired
};

export const ForeignLand = () => (
  <Fragment>
    {/* <HeadHelmet page="GAME" /> */}
    <Products>
      <Countdown date={Date.now() + PLAY_TIME} renderer={countdownRenderer} />
    </Products>
    <Main className="foreign-land">{Math.round(Math.random()) ? 'tomato?' : 'avocado?'}</Main>
  </Fragment>
);

export default ForeignLand;
