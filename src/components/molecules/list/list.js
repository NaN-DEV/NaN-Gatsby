// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Level from './level/level';
import Vertical from './verical/verical';

// CREATE NEW COMPONENT

const ListComponent = props => {
  const { type, color, content, newClass, newStyle } = props;

  // SELECT LIST
  const renderSwitchList = name => {
    switch (name) {
      case 'level':
        return <Level color={color} content={content} newClass={newClass} newStyle={newStyle} />;
      case 'vertical':
        return <Vertical color={color} content={content} newClass={newClass} newStyle={newStyle} />;
      default:
        return 'Please add type list :) ';
    }
  };

  return renderSwitchList(type);
};

// PropTpyes
ListComponent.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  newClass: PropTypes.string,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

ListComponent.defaultProps = {
  type: null,
  newClass: null,
  newStyle: null,
};

export default ListComponent;
