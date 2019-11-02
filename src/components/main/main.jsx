import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export const Main = ({ className, children }) => (
  <main className={classNames('flex-fill', className)}>
       {children}
  </main>
);

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Main.defaultProps = {
  className: '',
};
