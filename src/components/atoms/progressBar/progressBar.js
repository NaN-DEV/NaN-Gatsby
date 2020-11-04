// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT

import Ring from './ring/ring';

// CREATE NEW COMPONENT

const ProgressBar = props => {
  const { id, type, color, size, percent, newClass, newStyle } = props;

  switch (type) {
    case 'ring':
      return <Ring id={id} color={color} size={size} percent={percent} newClass={newClass} newStyle={newStyle} />;

    default:
      return 'Please add type Progress Bar :) ';
  }
};

// PropTpyes
ProgressBar.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  precent: PropTypes.number,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ProgressBar.defaultProps = {
  id: null,
  type: null,
  color: null,
  size: null,
  precent: null,
  newClass: null,
  newStyle: null,
};

export default ProgressBar;
