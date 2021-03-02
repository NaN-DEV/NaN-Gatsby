// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import Component
import Menu from './menu/menu';
import Info from './info/info';

// Create new component
const ModalComponent = props => {
  const { type, content, parameters } = props;

  switch (type) {
    case 'menu':
      return <Menu parameters={parameters} />;
    case 'info':
      return <Info content={content} parameters={parameters} />;

    default:
      return 'Please add type modal :)';
  }
};

// PropTpyes
ModalComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ModalComponent;
