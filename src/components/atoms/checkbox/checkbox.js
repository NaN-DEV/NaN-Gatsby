// Import plugin
import React from 'react';
import PropTypes from 'prop-types';

// Import component
import Box from './box/box';
import Classic from './classic/classic';

// Create new component
const CheckboxComponent = props => {
  const { id, type, content, parameters } = props;

  switch (type) {
    case 'box':
      return (
        <>
          <Box id={id} content={content} parameters={parameters} />
        </>
      );
    case 'classic':
      return (
        <>
          <Classic id={id} content={content} parameters={parameters} />
        </>
      );
    default:
      return 'pleace add type checkbox';
  }
};

// PropsTypes
CheckboxComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

// Export new component
export default CheckboxComponent;
