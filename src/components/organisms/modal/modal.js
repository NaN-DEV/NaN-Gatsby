// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import Component
import Menu from './menu/menu';
import Info from './info/info';

// Create new component
const ModalComponent = props => {
  const { id, key, type, content, parameters } = props;

  switch (type) {
    case 'menu':
      return <Menu id={id} key={key} content={content} parameters={parameters} />;
    case 'info':
      return <Info id={id} key={key} content={content} parameters={parameters} />;

    default:
      return 'Please add type modal :)';
  }
};

// PropTpyes
ModalComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ModalComponent.defaultProps = {
  id: null,
  key: null,
  content: false,
  parameters: false,
};

export default ModalComponent;
