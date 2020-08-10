// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Level from './level/level';
import Vertical from './verical/verical';

// CREATE NEW COMPONENT

const ListComponent = props => {
  const { type, breakpoint, children, newClass, newStyle } = props;

  // SELECT LIST
  const renderSwitchList = selectType => {
    switch (selectType) {
      case 'level':
        return (
          <Level newClass={newClass} newStyle={newStyle} breakpoint={breakpoint}>
            {children}
          </Level>
        );
      case 'vertical':
        return (
          <Vertical newClass={newClass} newStyle={newStyle}>
            {children}
          </Vertical>
        );
      default:
        return 'Please add type list :) ';
    }
  };

  return renderSwitchList(type);
};

// PropTpyes
ListComponent.propTypes = {
  type: PropTypes.string,
  newClass: PropTypes.string,
  breakpoint: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ListComponent.defaultProps = {
  type: null,
  newClass: null,
  newStyle: null,
  breakpoint: null,
};

export default ListComponent;
