// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Ring from './ring/ring';

// CREATE NEW COMPONENT

const ProgressBar = props => {
  const { id, key, type, content, parameters } = props;

  switch (type) {
    case 'ring':
      return (
        <Ring
          id={id}
          key={key}
          unit={content.unit}
          value={content.value}
          size={parameters.size}
          color={parameters.color}
          percent={content.percent}
          style={parameters.newStyle}
          duration={content.duration}
          nameClass={parameters.newClass}
          description={content.description}
        />
      );

    default:
      return 'Please add type Progress Bar :) ';
  }
};

// PropTpyes
ProgressBar.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
ProgressBar.defaultProps = {
  id: null,
  key: null,
  content: null,
  parameters: false,
};

export default ProgressBar;
