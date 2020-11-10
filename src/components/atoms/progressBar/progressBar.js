// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Ring from './ring/ring';

// CREATE NEW COMPONENT

const ProgressBar = props => {
  const { id, type, color, size, percent, unit, value, duration, newClass, newStyle, description, key } = props;

  switch (type) {
    case 'ring':
      return (
        <Ring
          id={id}
          key={key}
          size={size}
          unit={unit}
          color={color}
          value={value}
          percent={percent}
          newClass={newClass}
          newStyle={newStyle}
          duration={duration}
          description={description}
        />
      );

    default:
      return 'Please add type Progress Bar :) ';
  }
};

// PropTpyes
ProgressBar.propTypes = {
  unit: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  value: PropTypes.number,
  precent: PropTypes.number,
  newClass: PropTypes.string,
  duration: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProgressBar.defaultProps = {
  key: null,
  unit: null,
  size: null,
  value: null,
  color: null,
  precent: null,
  newClass: null,
  newStyle: null,
  duration: 6000,
  description: null,
};

export default ProgressBar;
