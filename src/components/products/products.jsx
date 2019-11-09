import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import avocado from '../../components/icons/avocado.svg';
import tomato from '../../components/icons/tomato.svg';
import { PRODUCTS } from '../../constants';

import './products.scss';

const { TOMATO, AVOCADO } = PRODUCTS;

export const Products = ({ children, handleClick, isDisabled, isWithTitle }) => (
  <div className="products flex-fill">
    <div
      className={classNames(
        'products-container d-flex justify-content-around align-items-center w-100 position-relative',
        { 'bottom-products-padding': isWithTitle }
      )}
    >
      <div
        className="position-relative"
        data-name={AVOCADO}
        tabIndex="0"
        role="button"
        onClick={handleClick}
        onKeyPress={handleClick}
        disabled={isDisabled}
      >
        <div className="image-container py-2 px-1 d-flex flex-column">
          {isWithTitle && <div className="app-link-tomato products-title app-title pb-2 pb-sm-4 ">green</div>}
          <img src={avocado} className="app-logo" alt="avocado" />
        </div>
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
        <div className="image-container py-2 px-1 d-flex flex-column">
          {isWithTitle && <div className="app-link-yellowgreen products-title app-title pb-2 pb-sm-4">red</div>}
          <img src={tomato} className="app-logo" alt="tomato" />
        </div>
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
