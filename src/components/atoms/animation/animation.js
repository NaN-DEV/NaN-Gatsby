// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import ScrollNextElement from './scrollNextElement/scrollNextElement';

// Create new component
const AnimationComponent = props => {
  const { type, parameters } = props;

  switch (type) {
    case 'scrollNextElement':
      return <ScrollNextElement parameters={parameters} />;
    default:
      return 'Please add type animation :) ';
  }
};

// PropTpyes
ScrollNextElement.propTypes = {
  type: PropTypes.string,
  parameters: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};

// PropTyoes default
ScrollNextElement.defaultProps = {
  type: null,
  parameters: null,
};

// Export new component
export default AnimationComponent;
