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



const ConsignmentWhoYouAreUI = ({
  step,
  theme,
  playStory,
  actions,
  isActive,
  question,
  opponentName,
  numberOfPlayers,
  isShowYoNButtons,
  handleChange,
  handleButtonClick,
  winners,
  personPlace
}) => (
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
    <div className="text-white py-3 info-board position-relative">{actions}</div>
    <div className="bg-dark text-white flex-grow-1 d-flex flex-column w-100 pb-5 overflow-auto">
      <div className="mx-auto chat-board pt-4 px-3">

        {step===STEPS.START &&
            <Fragment>
              <Button disabled={numberOfPlayers<2} className="app-button my-4" onClick={handleButtonClick} outline >
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
        {step===STEPS.PLAY && playStory.map(({timestamp, person, message}, index) => (
          <Fragment>
          {index===0 &&
          <div key={timestamp} className={classNames("pt-3 text-left")}>
            <div className="d-flex flex-wrap flex-grow-1 align-items-center">
              <div className="d-flex flex-wrap">
                <span className="pr-2 text-wrap font-weight-bold">{person}</span>
                <span className="text-muted">{moment(timestamp).format('LTS')}</span>
              </div>
            {step===STEPS.PLAY && isShowYoNButtons && !isActive &&
            <div className="flex-shrink-0 py-2">
              <Button data-name="yes" className="mx-3 bool-button" onClick={handleButtonClick} outline>yes</Button>
              <Button data-name="no" className="bool-button" onClick={handleButtonClick} outline>no</Button>
            </div>
            }
            </div>
          <div className="">{message}</div>
          </div>
          }
          {index!==0 &&
          <div key={timestamp} className="pt-3 text-left">
            <div className="d-flex flex-wrap">
              <span className="pr-2 font-weight-bold">{person}</span>
              <span className="text-muted">{moment(timestamp).format('LTS')}</span>
            </div>
            <div className="">{message}</div>
          </div>
          }
          </Fragment>
        ))}
        {step===STEPS.END && winners.map((el,ind)=>(
          <div key={ind}>
            <div className={classNames({'font-weight-bold': personPlace!==null && ind===personPlace}, 'text-left d-flex')}>
              <div className="pr-2 rating-index">{ind+1} &#45;</div>
              <span>{el}</span>
              {personPlace!==null && ind===personPlace && <span>&#45; you</span>}
            </div>
          </div>
        ))}
      </div>
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
