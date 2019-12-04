import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withCoreComponent } from '../../hocs/with-core-component';
import { ConsignmentWhoYouAreCore } from '../../core/consignment-who-you-are/consignment-who-you-are';
import { Main } from '../main/main';
import { STEPS } from '../../constants'
import './consignment-who-you-are.scss';



const ConsignmentWhoYouAreUI = ({step, theme, opponentName, handleChange, handleButtonClick}) => (
  <Fragment>
    <Main
      className='bg-yellowgreen flex-column justify-content-between'
    >
      <Link className="text-white" to="/">
        go home
      </Link>
      <div className="pb-4">
        <div>Theme: {theme}</div>
        {step===STEPS.START &&
        <Fragment>
          <label htmlFor="opponentName">Make a nickname for your opponent <input type="text" name="opponentName" value={opponentName} onChange={handleChange}/></label>
          <Button className="ml-2 app-button my-4" onClick={handleButtonClick} outline >
        Apply
      </Button>
        {/* <div>Make a nickname for your opponent</div>
        <input type="text" name="input" value="Type here"/> */}
        </Fragment>
        }
        <div>
          Guess who you are. Ask questions that can be answered “yes” or “no” to understand what nickname your opponent came up with for you
        </div>
      </div>
    </Main>
    <div className="bg-dark text-white flex-grow-1">
      chat
    </div>
  </Fragment>
);

ConsignmentWhoYouAreUI.propTypes = {
  endDate: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export const ConsignmentWhoYouAre = withCoreComponent(ConsignmentWhoYouAreCore, ConsignmentWhoYouAreUI);
