import React from 'react';
import PropTypes from 'prop-types';
import avocado from '../../components/icons/avocado.svg';
import tomato from '../../components/icons/tomato.svg';
import { PRODUCTS } from '../../constants';

const { TOMATO, AVOCADO } = PRODUCTS;

export const Products = ({ children, handleClick, isDisabled, isWithTitle }) => (
  <header className="app-header">
    <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center py-4 w-100">
      <div
        className="position-relative"
        data-name={AVOCADO}
        tabIndex="0"
        role="button"
        onClick={handleClick}
        onKeyPress={handleClick}
        disabled={isDisabled}
      >
        {isWithTitle && <div className="position-absolute app-link-tomato">green like</div>}
        <img src={avocado} className="app-logo py-4 px-1" alt="avocado" />
      </div>
      <div className="app-header-child my-4">{children}</div>
      <div
        className="position-relative"
        data-name={TOMATO}
        tabIndex="0"
        role="button"
        onClick={handleClick}
        onKeyPress={handleClick}
        disabled={isDisabled}
      >
        {isWithTitle && <div className="position-absolute app-link-yellowgreen">red like</div>}
        <img src={tomato} className="app-logo py-4 px-1" alt="tomato" />
      </div>
    </div>
  </header>
);

Products.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isWithTitle: PropTypes.bool
};

Products.defaultProps = {
  children: <div />,
  handleClick: null,
  isDisabled: false,
  isWithTitle: false
};
