import React from 'react';
import PropTypes from 'prop-types';

export const withCoreComponent = (CoreComponent, InnerComponent) => {
  const WrappedComponent = ({ coreProps, ...restProps }) => (
    <CoreComponent {...coreProps} {...InnerComponent.coreProps}>
      {coreComponentProps => <InnerComponent {...coreComponentProps} {...restProps} />}
    </CoreComponent>
  );

  WrappedComponent.propTypes = {
    coreProps: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.objectOf(PropTypes.any),
      PropTypes.arrayOf(PropTypes.any),
      PropTypes.objectOf(PropTypes.shape(PropTypes.any))
    ])
  };

  WrappedComponent.defaultProps = {
    coreProps: {}
  };
  return WrappedComponent;
};
