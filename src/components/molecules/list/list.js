// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import Level from './level/level';
import Vertical from './verical/verical';

// Create new component
const ListComponent = props => {
  const { type, parameters, children } = props;

  switch (type) {
    case 'level':
      return <Level parameters={parameters}>{children}</Level>;
    case 'vertical':
      return <Vertical parameters={parameters}>{children}</Vertical>;
    default:
      return 'Please add type list :) ';
  }
};

// PropTpyes
ListComponent.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ListComponent;
