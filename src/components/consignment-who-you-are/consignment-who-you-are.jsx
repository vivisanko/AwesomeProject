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



const ConsignmentWhoYouAreUI = ({step, theme, actions, opponentName, numberOfPlayers, handleChange, handleButtonClick}) => (
  <Fragment>
    <Main
      className='bg-yellowgreen flex-column justify-content-between'
    >
      <Link className="text-white" to="/">
        go home
      </Link>
      <div className="pb-4 px-2">
       {step!==STEPS.START && <div className="font-weight-bold">Theme: {theme}</div>}
        <div className="">Number of players: {numberOfPlayers}</div>

        <div>
          Guess who you are. Ask questions that can be answered “yes” or “no” to understand what nickname your opponent came up with for you
        </div>
      </div>
    </Main>
    <div className="bg-dark text-white pt-3 pb-4 info-board">{actions}</div>
    <div className="bg-dark text-white flex-grow-1 overflow-auto">
    {step===STEPS.START &&
        <Fragment>
          <Button disabled={numberOfPlayers<2} className="ml-2 app-button my-4" onClick={handleButtonClick} outline >
          participate in the game
          </Button>
        </Fragment>
    }
    {step===STEPS.ACT &&
        <Fragment>
          <label htmlFor="opponentName">Make a nickname for your opponent <input className="my-2" type="text" name="opponentName" value={opponentName} onChange={handleChange}/></label>
          <Button disabled={opponentName===''} className="ml-2 app-button my-4" onClick={handleButtonClick} outline >
            Apply
          </Button>
        </Fragment>
    }
    </div>

  </Fragment>
);

ConsignmentWhoYouAreUI.propTypes = {
  step: PropTypes.number.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
  opponentName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export const ConsignmentWhoYouAre = withCoreComponent(ConsignmentWhoYouAreCore, ConsignmentWhoYouAreUI);
