// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import Ring from './ring/ring';

// Create new component
const ProgressBarComponent = props => {
  const { type, id, content, parameters } = props;

  switch (type) {
    case 'ring':
      return <Ring id={id} content={content} parameters={parameters} />;
    default:
      return 'Please add type';
  }
};

// PropTpyes
ProgressBarComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProgressBarComponent;
