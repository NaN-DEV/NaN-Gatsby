// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT COMPONENT
import Box from './box/box';
import Classic from './classic/classic';

// CREATE NEW COMPONENT

const CheckboxComponent = props => {
  const { id, key, type, content, parameters } = props;

  switch (type) {
    case 'box':
      return (
        <>
          <Box id={id} key={key} content={content} parameters={parameters} />
        </>
      );
    case 'classic':
      return (
        <>
          <Classic id={id} key={key} content={content} parameters={parameters} />
        </>
      );
    default:
      return 'pleace add type checkbox';
  }
};

CheckboxComponent.propTypes = {
  id: PropTypes.string,
  key: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  parameters: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CheckboxComponent.defaultProps = {
  id: null,
  key: null,
  type: null,
  content: null,
  parameters: null,
};

// EXPORT NEW COMPONENT
export default CheckboxComponent;
