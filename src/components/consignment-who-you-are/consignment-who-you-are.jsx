import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { withCoreComponent } from '../../hocs/with-core-component';
import { ConsignmentWhoYouAreCore } from '../../core/consignment-who-you-are/consignment-who-you-are';
import { Main } from '../main/main';
import { STEPS } from '../../constants';
import { InputBlock } from './input-block/input-block';
import './consignment-who-you-are.scss';



const ConsignmentWhoYouAreUI = ({step, theme, playStory, actions, isActive, question, opponentName, numberOfPlayers, isShowYoNButtons, handleChange, handleButtonClick}) => (
  <Fragment>
    <Main
      className='bg-yellowgreen flex-column justify-content-between'
    >
      <Link className="text-white" to="/">
        go home
      </Link>
      <div className="pb-4 px-2">
       {step!==STEPS.START && <div className="font-weight-bold">Theme: {theme}</div>}
        <div className="">{numberOfPlayers ? <span>Number of players: {numberOfPlayers}</span> : <span>The game has already begun, try again later</span>}</div>

        <div>
          Guess who you are. Ask questions that can be answered “yes” or “no” to understand what nickname your opponent came up with for you
        </div>
      </div>
    </Main>
    <div className="bg-dark text-white pt-3 pb-4 info-board">{actions}
    {step===STEPS.PLAY && isShowYoNButtons && !isActive &&
    <Fragment>
      <Button data-name="yes" className="mx-3 bool-button" onClick={handleButtonClick} outline>yes</Button>
      <Button data-name="no" className="bool-button" onClick={handleButtonClick} outline>no</Button>
    </Fragment>

    }
    </div>
    <div className="bg-dark text-white flex-grow-1 overflow-auto">
    {step===STEPS.START &&
        <Fragment>
          <Button disabled={numberOfPlayers<2} className="ml-2 app-button my-4" onClick={handleButtonClick} outline >
          participate in the game
          </Button>
        </Fragment>
    }
    {step===STEPS.ACT &&
      <InputBlock
        isStepAct={true}
        isDisabled={opponentName===''}
        inputValue={opponentName}
        inputName='opponentName'
        handleInputChange={handleChange}
        onButtonClick={handleButtonClick}
      />
    }
    {playStory.map(({timestamp, person, message}) => (
      <div key={timestamp} className="pl-4 pb-3 text-left">
        <div><span className="pr-2 font-weight-bold">{person}</span><span className="text-muted">{moment(timestamp).format('LTS')}</span></div>
        <div className="">{message}</div>
      </div>
    ))}
    {step===STEPS.PLAY && isActive &&
      <InputBlock
        isStepAct={false}
        isDisabled={question===''}
        inputValue={question}
        inputName='question'
        handleInputChange={handleChange}
        onButtonClick={handleButtonClick}
      />
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
