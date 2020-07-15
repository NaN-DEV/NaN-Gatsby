// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Triangle from './triangle/triangle';
import Scrambler from './ScramblerText/ScramblerText';
import settings from '../../../layouts/settings/settings';

// CREATE NEW COMPONENT

const SectionComponent = props => {
  const { type, title, size, color, newClass, newStyle, children, content } = props;

  // SELECT SECTION
  const renderSwitchWrap = wrap => {
    switch (wrap) {
      case 'scrambler':
        return (
          <>
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
          </>
        );
      case 'tsriangle':
        return (
          <>
            <Triangle
              size={size}
              color={color}
              title={title}
              theme={settings}
              content={content}
              newClass={newClass}
              newStyle={newStyle}
            />
          </>
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
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  newClass: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SectionComponent.defaultProps = {
  type: null,
  title: null,
  size: 'full',
  content: null,
  newClass: null,
  newStyle: null,
  children: null,
  color: 'primary',
};

export default SectionComponent;
