import React from 'react';
import PropTypes from 'prop-types';
import avocado from '../../components/icons/avocado.svg';
import tomato from '../../components/icons/tomato.svg';
import { PRODUCTS } from '../../constants';

import './products.scss';

const { TOMATO, AVOCADO } = PRODUCTS;

export const Products = ({ children, handleClick, isDisabled, isWithTitle }) => (
  <div className="products flex-fill">
    <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center w-100 position-relative">
      <div
        className="position-relative"
        data-name={AVOCADO}
        tabIndex="0"
        role="button"
        onClick={handleClick}
        onKeyPress={handleClick}
        disabled={isDisabled}
      >
        {isWithTitle && <div className="position-absolute app-link-tomato">green</div>}
        <img src={avocado} className="app-logo py-2 px-1" alt="avocado" />
      </div>
      <div className="products-child my-2">{children}</div>
      <div
        className="position-relative"
        data-name={TOMATO}
        tabIndex="0"
        role="button"
        onClick={handleClick}
        onKeyPress={handleClick}
        disabled={isDisabled}
      >
        {isWithTitle && <div className="position-absolute app-link-yellowgreen">red</div>}
        <img src={tomato} className="app-logo py-2 px-1" alt="tomato" />
      </div>
    </div>
  </div>
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
