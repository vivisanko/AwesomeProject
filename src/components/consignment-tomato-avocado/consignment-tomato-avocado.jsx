import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';
import { withCoreComponent } from '../../hocs/with-core-component';
import { ConsignmentTomatoAvocadoCore } from '../../core/consignment-tomato-avocado/consignment-tomato-avocado';
import { Products } from '../products/products';
import { Main } from '../main/main';

import './consignment-tomato-avocado.scss';

const COUNTDOWN_CLASSES = 'box d-flex justify-content-center align-items-center rounded mx-1';

const countdownRenderer = ({ minutes, seconds }) => (
  <div className="d-flex align-items-center m-1 countdown">
    <div className={COUNTDOWN_CLASSES}>{minutes}</div>:<div className={COUNTDOWN_CLASSES}>{seconds}</div>
  </div>
);

countdownRenderer.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired
};

const ConsignmentTomatoAvocadoUI = ({ endDate, productName, score, handleClick, isDisabled }) => (
  <Fragment>
    <Main
      className={classNames('bg-tomato flex-column justify-content-between', {
        'bg-yellowgreen': Math.round(Math.random())
      })}
    >
      <Link className="text-white" to="/">
        go home
      </Link>
      <div className="align-items-center d-flex flex-grow-1 app-title">{productName}</div>
      <div>match object to its color</div>
    </Main>
    <div className="score-box position-absolute d-flex justify-content-center align-items-center rounded mt-2 mr-2 text-white">
      {score}
    </div>
    <Products handleClick={handleClick} isDisabled={isDisabled} isWithTitle={true}>
      <Countdown date={endDate} renderer={countdownRenderer} />
    </Products>
  </Fragment>
);

ConsignmentTomatoAvocadoUI.propTypes = {
  endDate: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export const ConsignmentTomatoAvocado = withCoreComponent(ConsignmentTomatoAvocadoCore, ConsignmentTomatoAvocadoUI);
