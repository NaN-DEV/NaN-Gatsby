// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Scrambler from './ScramblerText/ScramblerText';
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const { type, title, size, color, newClass, newStyle, children } = props;

  // SELECT SECTION
  const renderSwitchWrap = wrap => {
    switch (wrap) {
      case 'scrambler':
        return (
          <Scrambler
            size={size}
            color={color}
            title={title}
            theme={settings}
            newClass={newClass}
            newStyle={newStyle}
          >
            {children}
          </Scrambler>
        );
      default:
        return 'Please add type section :)';
    }
  };

  return renderSwitchWrap(type);
};

// PropTpyes
SectionComponent.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionComponent.defaultProps = {
  type: null,
  title: null,
  size: 'full',
  newClass: null,
  newStyle: null,
  color: 'primary',
};

export default SectionComponent;
