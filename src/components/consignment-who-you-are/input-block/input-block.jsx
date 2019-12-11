import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'reactstrap';

export const InputBlock = ({isStepAct, isDisabled, inputValue, inputName, handleInputChange, onButtonClick})=>(
  <div className="pl-3 text-left">
      <label htmlFor={inputName}>{isStepAct ? 'Make a nickname for your opponent':''}<input data-name={inputName} className="my-2 mx-2 text-left" type="text" name={inputName} value={inputValue} onChange={handleInputChange}/></label>
      <Button disabled={isDisabled} className="app-button my-4" onClick={onButtonClick} outline >
         {isStepAct?'Apply': 'Ask'}
      </Button>
  </div>
)
