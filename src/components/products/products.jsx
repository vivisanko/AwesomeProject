import React from 'react';
import PropTypes from 'prop-types';
import avocado from '../../components/icons/avocado.svg';
import tomato from '../../components/icons/tomato.svg';
// import { PAGE_NAMES } from '../../constants';

// import './foreign-land.scss';

export const Products = ({ children, handleClick }) => (
  <header className="app-header">
    <div className="d-flex flex-column flex-sm-row justify-content-around align-items-center py-4 w-100">
      <div data-name="avocado" tabIndex="0" role="button" onClick={handleClick} onKeyPress={handleClick}>
        <img src={avocado} className="app-logo py-4" alt="logo" />
      </div>
      <div className="app-header-child">{children}</div>
      <div data-name="tomato" tabIndex="0" role="button" onClick={handleClick} onKeyPress={handleClick}>
        <img src={tomato} className="app-logo py-4" alt="logo" />
      </div>
    </div>
  </header>
);

Products.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func
};

Products.defaultProps = {
  children: <div />,
  handleClick: null
};
