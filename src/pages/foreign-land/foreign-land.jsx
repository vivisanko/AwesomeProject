import React, { Component, Fragment } from 'react';
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

export class ForeignLand extends Component {
  state = {
    score: 0,
    name: '',
    startDate: 0
  };
  componentDidMount() {
    this.setState({ startDate: Date.now() });
  }

  handleClick = ({
    currentTarget: {
      dataset: { name }
    }
  }) => {
    // const item = event.currentTarget;
    console.log('name', name);
    this.setState({ name: name });
  };

  render() {
    const { startDate } = this.state;
    return (
      <Fragment>
        {/* <HeadHelmet page="GAME" /> */}
        <Products handleClick={this.handleClick}>
          <Countdown date={startDate + PLAY_TIME} renderer={countdownRenderer} />
        </Products>
        <Main className={Math.round(Math.random()) ? 'bg-tomato' : 'bg-yellowgreen'}>
          {Math.round(Math.random()) ? 'tomato?' : 'avocado?'}
        </Main>
      </Fragment>
    );
  }
}

export default ForeignLand;
