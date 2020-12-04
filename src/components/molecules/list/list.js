// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Level from './level/level';
import Vertical from './verical/verical';

// CREATE NEW COMPONENT
const ListComponent = props => {
  const { type, children, newClass, newStyle } = props;

  switch (type) {
    case 'level':
      return (
        <Level newClass={newClass} newStyle={newStyle}>
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

// PropTpyes
ListComponent.propTypes = {
  type: PropTypes.string,
  newClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  newStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// PropTpyes default
ListComponent.defaultProps = {
  type: null,
  newClass: null,
  newStyle: null,
};

export default ListComponent;
